import { useEffect, useState } from "react";
import { TStudent } from './type';
import { useStudent } from './hooks/useStudent';
import { HangmanName } from './components/HangmanName';
import { Keyboard } from './components/Keyboard';
import { HangmanStudent } from './components/HangmanStudent';
import { HangmanClue } from './components/HangmanClue';
import BackgroundImage from './components/BackgroundImage';
import MusicPlayer from "./components/MusicPlayer";
import Time from "./components/Time";
import ModalList from "./templates/ModalList";

function App() {
  const [clue, setClue] = useState<TStudent[]>([])
  const [isPlay, setIsPlay] = useState<boolean>(false)
  const [wordGuess, setWordGuess] = useState<string>('')
  const [guessedLetter, setGuessedLetter] = useState<string[]>([])
  const falseGuess = guessedLetter.filter(letter => wordGuess.includes(letter))
  const wrongCount = guessedLetter.length - falseGuess.length
  //const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const addGuessLetter = (letter: string) => {
  if(guessedLetter.includes(letter)) return
  setGuessedLetter(currentLetters => [...currentLetters, letter])
  }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const dataClue = await useStudent(process.env.VITE_API_URL, 3500);
          if (dataClue) {
            setClue([dataClue as TStudent]);
            setWordGuess(dataClue.name!);
            setIsPlay(true)
          }
        } catch (err) {
          console.error(err);
        }
      };

      fetchData()
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

      const MainComponent:React.FC = () => {
        return (
          <div className="lg:py-[3vh] 2xl:py-0 fixed inset-0 flex items-center justify-center z-50 px-[5vw] md:px-[25vw]">
          <BackgroundImage/>
          <div className="h-full w-full bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            <Time/>
            {/* <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying}/> */}
            <MusicPlayer/>
            <div className='flex flex-col mx-auto items-center'>
            <HangmanClue data={clue}/>
            <HangmanStudent data={wrongCount}/>
            <HangmanName data={wordGuess} letters={guessedLetter}/>
            <div className='items-stretch'>
              <Keyboard addGuessLetter={addGuessLetter}/>
            </div>
          </div>
          </div>
        </div>
        )
      }

  return (
  <>
      {isPlay ? (
        <MainComponent/>
      ) : (
        <div>
          <BackgroundImage/>
          <ModalList setIsPlay={setIsPlay}/>
        </div>
      )}
  </>
  )
}

export default App