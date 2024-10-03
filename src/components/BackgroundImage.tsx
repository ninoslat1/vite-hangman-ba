import { backImage } from "../templates/ImageList"

const BackgroundImage = () => {
  return (
    <div className='bg-[#D6B6CC] absolute h-full w-screen top-0 left-0 -z-50'>
      {backImage}
    </div>
  )
}

export default BackgroundImage