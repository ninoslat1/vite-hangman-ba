import { useEffect } from 'react'
import { NoteModalWrapper } from './NoteModalWrapper'


const WinModalWrapper = ({win}:{win:boolean}) => {

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && win) {
        window.location.reload()
      }
    }

    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [win])

  return (
        <NoteModalWrapper>
          {/* <StatusClose/> */}
          <p>You win</p>
          <p>Thank you for playing our games</p>
        </NoteModalWrapper>
  )
}

export default WinModalWrapper