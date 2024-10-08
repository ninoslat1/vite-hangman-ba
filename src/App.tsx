import { FC, Suspense, lazy, useCallback, useEffect, useRef, useState } from "react"
import { TStudent } from './utils/type'
import { useStudent } from './hooks/useStudent'
import { HangmanName } from './components/HangmanName'
import { HangmanStudent } from './components/HangmanStudent'
import { HangmanClue } from './components/HangmanClue'
import song from "/01 Mitsukiyo 01 Constant Moderato.mp3"
import { LoadingComponent } from "./components/LoadingComponent"
// import MultiStepModal from "./components/MultiStepModal"
import WinModalWrapper from "./templates/WinModalWrapper"
import LoseModalWrapper from "./templates/LoseModalWrapper"
import { DeveloperNotes } from "./components/DeveloperNotes"
import { MusicPlayer } from "./components/MusicPlayer"

//Lazyload Component
const BackgroundImage = lazy(() => import('./components/BackgroundImage'))
const Time = lazy(() => import('./components/Time'))
const Keyboard = lazy(() => import('./components/Keyboard'))

function App() {
  const audioRef = useRef<HTMLAudioElement>(new Audio(song))
  const [wordGuess, setWordGuess] = useState<Partial<TStudent>>(useStudent())
  const [guessedLetter, setGuessedLetter] = useState<string[]>([])
  const falseGuess = guessedLetter.filter(letter => !wordGuess.name!.replace(/[^a-zA-Z]/g, '').toLowerCase().includes(letter.toLowerCase()))
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const lose = falseGuess.length >= 6
  const win = falseGuess.length < 6 && wordGuess.name!.replace(/[^a-zA-Z]/g, '').toLowerCase().split("").every(letter => guessedLetter.includes(letter))

  const [clue, setClue] = useState<Partial<TStudent>>({
    squadType: wordGuess.squadType,
    profile: wordGuess.profile && wordGuess.profile.replace(new RegExp(`[^.!?]*\\b${wordGuess.name}\\b[^.!?]*[.!?]`, 'g'), '').trim().replace(/\s+/g, ' '),
    rarity: wordGuess.rarity,
    school: wordGuess.school,
    name: wordGuess.name
  })
  
  // API
  // const fetchData = async () => {
  //   try {
  //     const dataClue = await useStudent(process.env.VITE_API_URL, 3500)
  //     if (dataClue) {
  //       setClue([dataClue as TStudent])
  //       setWordGuess(dataClue.name!)
  //       toast.success("Random student has appeared, guess her please")
  //     }
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  const addGuessLetter = useCallback((letter: string) => {
    if(guessedLetter.includes(letter) || win || lose) return
    setGuessedLetter(currentLetters => [...currentLetters, letter])
  }, [guessedLetter, win, lose])

  const playPause = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
      audioRef.current.loop = true;
    }
    setIsPlaying(!isPlaying);
  }

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    if (!key.match(/^[a-z]$/)) return;
    
    e.preventDefault();
    if (!guessedLetter.includes(key) && !win && !lose) {
      setGuessedLetter(currentLetters => [...currentLetters, key]);
    }
  }, [guessedLetter, win, lose, addGuessLetter]);

    useEffect(() => {
      return () => {
        audioRef.current!.pause()
        audioRef.current!.currentTime = 0
      } 
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (win || lose){
        const key = e.key
        if (key !== "Enter") return
  
        e.preventDefault()
        setGuessedLetter([])
        const fetchStudent = useStudent()
        setWordGuess(fetchStudent)
        setClue({
          squadType: fetchStudent.squadType,
          profile: fetchStudent.profile !== undefined ? fetchStudent.profile.replace(new RegExp(`[^.!?]*\\b${fetchStudent.name}\\b[^.!?]*[.!?]`, 'g'), '').trim().replace(/\s+/g, ' ') : "",
          rarity: fetchStudent.rarity,
          school: wordGuess.school,
          name: wordGuess.name
        })
      }
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [win, lose])
  
    useEffect(() => {      
      document.addEventListener("keypress", handleKeyPress)
      return () => {
        document.removeEventListener("keypress", handleKeyPress)
      }
      
  }, [guessedLetter, win, lose, addGuessLetter])
      
      const MainComponent:FC = () => {
        return (
          <>
            {clue && wordGuess &&
              <div className="fixed inset-0 flex items-center justify-center">
                  {win && wordGuess ? <WinModalWrapper/> : null}
                  {lose && wordGuess ? <LoseModalWrapper/> : null}
                  <BackgroundImage/>
                  <div className="h-full py-5 w-full bg-blue-900 bg-clip-padding bg-opacity-10 border border-gray-100">
                    <div className="flex items-center justify-between px-10">
                        <Time />
                        <div className="flex items-center gap-5">
                            <DeveloperNotes />
                            <MusicPlayer isPlaying={isPlaying} playPause={playPause}/>
                        </div>
                    </div>
                    <div className='flex flex-col mx-auto items-center'>
                      <HangmanClue squadType={clue.squadType!} profile={clue.profile!} name={clue.name!} school={clue.school!} rarity={clue.rarity!}/>
                      <HangmanStudent data={falseGuess.length}/>
                      <HangmanName data={wordGuess.name} letters={guessedLetter} reveal={lose}/>
                      <div className='items-stretch'>
                        <Keyboard activeLetters={guessedLetter.filter(letter => wordGuess.name!.includes(letter))} inactiveLetters={falseGuess} addGuessLetter={addGuessLetter} disabled={lose || win }/>
                      </div>
                    </div>
                  
                  </div>
              </div>
          }
          </>
        )
      }

  return (
  <>
    <Suspense fallback={<LoadingComponent text={"Loading..."}/>}>
        <MainComponent/>
    </Suspense>
  </>
  )
}

export default App