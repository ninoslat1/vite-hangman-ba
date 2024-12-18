import { shockAruImg } from './ImageList'
import { NoteModalWrapper } from './NoteModalWrapper'


const LoseModalWrapper = () => {
  const handleButtonClick = () => {
    const event = new KeyboardEvent('keypress', {key: "Enter"})
    document.dispatchEvent(event)
  }

  return (
        <NoteModalWrapper>
            <div className='absolute -top-10 -left-6 w-24 h-24'>
              {shockAruImg}
            </div>
            <p className='text-center text-2xl font-extrabold font-kanit p-4'>YOU LOSE</p>
            <p className='text-center font-bold text-lg'>Better luck next time</p>
            <div className="flex justify-between py-2 gap-2 items-center">
                <small className='py-2 text-xs w-2/3'>(Press <span className='badge border-none bg-[#82c4bd] text-[#FCFBB6] badge-sm mx-1 px-2'>Enter</span> for restart, or click this button)</small>
                <button className='block btn btn-sm bg-[#82c4bd] text-[#FCFBB6] border-none' onClick={handleButtonClick}>Restart</button>
            </div>
        </NoteModalWrapper>
  )
}

export default LoseModalWrapper