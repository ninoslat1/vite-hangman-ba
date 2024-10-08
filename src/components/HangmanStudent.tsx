import { THangmanDrawing } from "../utils/type"
import { startImg, secondImg, thirdImg, fourthImg, fifthImg, lastImg } from "../templates/ImageList"

export const HangmanStudent = ({data}:THangmanDrawing) => {
    return (
        <div className="relative">
            <div className="h-[10vh] w-[2.5vw] laptop:w-[1vw] desktop:w-[1vw] bg-[#D6B6CC] top-0 right-0 absolute"></div>
            <div className="h-[1vh] w-[25vw] bg-[#D6B6CC] ml-10"></div>
            <div className="h-[35vh] md:h-[40vh] laptop:h-[50vh] desktop:h-[50vh] w-[2.5vw] laptop:w-[1vw] desktop:w-[1vw] bg-[#D6B6CC] ml-10"></div>
            <div className="h-[1vh] w-[25vw] bg-[#D6B6CC]"></div>
            <div className="h-[325px] w-[325px] md:h-[350px] md:w-[350px] absolute -top-[1rem] -right-44">
            {(() => {
        switch (data) {
            case 0:
                return null
                case 1:
                    return <div className="slide-down">{startImg}</div>;
                case 2:
                    return <div className="slide-down">{secondImg}</div>;
                case 3:
                    return <div className="slide-down">{thirdImg}</div>;
                case 4:
                    return <div className="slide-down">{fourthImg}</div>;
                case 5:
                    return <div className="slide-down">{fifthImg}</div>;
                case 6:
                    return <div className="slide-down">{lastImg}</div>;
            default:
                return null
        }
      })()}
            </div>
        </div>
    )
}