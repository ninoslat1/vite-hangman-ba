import { useEffect } from 'react'
import { NoteModalWrapper } from './NoteModalWrapper'

const LoseModalWrapper = ({ lose }: { lose: boolean }) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && lose) {
        window.location.reload()
      }
    }

    document.addEventListener('keydown', handleKeydown)

    return () => {
      document.removeEventListener('keydown', handleKeydown)
    }
  }, [lose])

  return (
    <NoteModalWrapper>
      <p>You lose</p>
      <p>Better luck next time</p>
    </NoteModalWrapper>
  )
}

export default LoseModalWrapper