import { StatusClose } from './IconList'
import { NoteModalWrapper } from './NoteModalWrapper'

const LoseModalWrapper = () => {

  return (
    <NoteModalWrapper>
      <StatusClose/>
        <p>You lose</p>
        <p>Better luck next time</p>
    </NoteModalWrapper>
  )
}

export default LoseModalWrapper