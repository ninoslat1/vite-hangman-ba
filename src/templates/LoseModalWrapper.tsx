import { NoteModalWrapper } from './NoteModalWrapper'


const LoseModalWrapper = () => {
  const handleButtonClick = () => {
    const event = new KeyboardEvent('keypress', {key: "Enter"})
    document.dispatchEvent(event)
  }

  return (
        <NoteModalWrapper>
            <p className='text-center text-2xl font-bold p-4'>YOU LOSE</p>
            <p>Better luck next time</p>
            <div className="flex justify-between py-2 gap-2 items-center">
                <small className='py-2 text-xs w-2/3'>(Press <span className='badge badge-neutral mx-1 px-2'>Enter</span> for restart, or click this button)</small>
                <button className='block btn btn-md btn-info' onClick={handleButtonClick}>Restart</button>
            </div>
        </NoteModalWrapper>
  )
}

export default LoseModalWrapper