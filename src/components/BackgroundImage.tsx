import bgImg from "@assets/bg.png"

const BackgroundImage = () => {
  return (
    <div className='bg-cyan-300 absolute h-full w-screen top-0 left-0 -z-50'>
      <img src={bgImg} className="absolute h-full w-screen object-cover brightness-50 -z-20"/>
    </div>
  )
}

export default BackgroundImage