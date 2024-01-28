import { THangmanDrawing } from "../type"
import { startImg, secondImg, thirdImg, fourthImg, fifthImg, lastImg } from "../templates/ImageList"

export const HangmanStudent = ({data}:THangmanDrawing) => {
    if(data > 6){
        location.reload();
    }

    return (
        <div className="relative">
            <div className="h-[5vh] w-[2.5vw] laptop:w-[1vw] desktop:w-[1vw] bg-[#37a1fa] top-0 right-0 absolute"></div>
            <div className="h-[1vh] w-[25vw] bg-[#37a1fa] ml-10"></div>
            <div className="h-[50vh] w-[2.5vw] laptop:w-[1vw] desktop:w-[1vw] bg-[#37a1fa] ml-10"></div>
            <div className="h-[1vh] w-[25vw] bg-[#37a1fa]"></div>
            <div className="h-[400px] w-[400px] absolute -top-6 -right-44">
            {(() => {
        switch (data) {
            case 1:
                return startImg
            case 2:
                return secondImg 
            case 3:
                return thirdImg
            case 4:
                return fourthImg 
            case 5:
                return fifthImg
            case 6:
                return lastImg
            default:
                return null
        }
      })()}
            </div>
        </div>
    )
}