import { FC, Suspense, lazy, useCallback, useEffect, useRef, useState } from "react"
import { TStudent } from './utils/type'
import { useStudent } from './hooks/useStudent'
import { HangmanName } from './components/HangmanName'
import { HangmanStudent } from './components/HangmanStudent'
import { HangmanClue } from './components/HangmanClue'
import song from "@assets/01 Mitsukiyo 01 Constant Moderato.mp3"
import { LoadingComponent } from "./components/LoadingComponent"
import MultiStepModal from "./components/MultiStepModal"
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WinModalWrapper from "./templates/WinModalWrapper"
import LoseModalWrapper from "./templates/LoseModalWrapper"

//Lazyload Component
const BackgroundImage = lazy(() => import('./components/BackgroundImage'))
const Time = lazy(() => import('./components/Time'))
const Keyboard = lazy(() => import('./components/Keyboard'))

function App() {
  const audioRef = useRef<HTMLAudioElement>(new Audio(song))
  const [clue, setClue] = useState<TStudent[]>([])
  const [wordGuess, setWordGuess] = useState<string>('')
  const [guessedLetter, setGuessedLetter] = useState<string[]>([])
  const falseGuess = guessedLetter.filter(letter => !wordGuess.includes(letter))
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const lose = falseGuess.length >= 6
  const win = falseGuess.length < 6 && [...new Set(wordGuess.toLowerCase().replace(" ", ""))].join("") === guessedLetter.join("")

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

  // Local JSON
  const fetchData = async () => {
    try {
      const dataClue = await useStudent(3500);
      if (dataClue) {
        setClue([dataClue as TStudent]);
        setWordGuess(dataClue.name!);
        toast.success("Random student has appeared, guess her please");
      }
    } catch (err) {
      console.error(err);
    }
  };

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

    useEffect(() => {
      fetchData()

      return () => {
        audioRef.current!.pause()
        audioRef.current!.currentTime = 0
      }
      
  }, []);
  
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key
    
        if (!key.match(/^[a-z]$/)) return
        
        e.preventDefault()
        addGuessLetter(key)
      }
      
      document.addEventListener("keypress", handler)
      return () => {
        document.removeEventListener("keypress", handler)
      }
      
  }, [guessedLetter])

  useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if(e.key === "ENTER" && win || lose){
          window.location.reload()
        }
      }

      document.addEventListener('keydown', handler)

      return () => {
        document.removeEventListener('keydown', handler)
      }
  },[win, lose])
  
      const MusicPlayer:FC = () => {
        return (
          <div className="absolute right-5 top-5 md:right-10 md:top-10 z-50">
              <label className="swap">
                <input type="checkbox" checked={isPlaying} onChange={playPause} />
                <svg className="swap-on fill-current text-[#CFF1FB] bg-[#2f89e3] animate-bounce w-8 h-8 lg:w-10 lg:h-10 p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg>
                <svg className="swap-off fill-current text-slate-900 w-8 h-8 lg:w-10 lg:h-10 p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg>
              </label>
            </div>
        )
      }
      

      const MainComponent:FC = () => {
        return (
          <>
          <div className="lg:py-[3vh] 2xl:py-0 fixed inset-0 flex items-center justify-center z-50">
              {win && wordGuess ? <WinModalWrapper/> : null}
              {lose && wordGuess ? <LoseModalWrapper/> : null}
              <BackgroundImage/>
              <div className="h-full w-full bg-blue-900 rounded-md bg-clip-padding bg-opacity-10 border border-gray-100">
                <Time/>
                <MusicPlayer/>
                <div className='flex flex-col mx-auto items-center'>
                  <HangmanClue data={clue}/>
                  <HangmanStudent data={falseGuess.length}/>
                  <HangmanName data={wordGuess} letters={guessedLetter} reveal={lose}/>
                  <div className='items-stretch'>
                    <Keyboard activeLetters={guessedLetter.filter(letter => wordGuess.includes(letter))} inactiveLetters={falseGuess} addGuessLetter={addGuessLetter} disabled={lose || win }/>
                  </div>
                </div>
              <MultiStepModal/>
              </div>
              <ToastContainer position="top-right" autoClose={1000} hideProgressBar newestOnTop closeOnClick={false} rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover={false} theme="dark" transition={Flip}/>
          </div>
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