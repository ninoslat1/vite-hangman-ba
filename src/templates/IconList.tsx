import { TRightDownArrow} from "../utils/type"

export const RightDownArrow = ({ setIsGuideOpen }: TRightDownArrow) => {
    return (
        <div className='flex justify-end hover:cursor-pointer' onClick={() => setIsGuideOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
        </div>
    )
}

// export const StatusClose = () => {
//     return (
//         <div className="flex justify-end hover:cursor-pointer" onClick={() => window.location.reload()}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//             </svg>
//         </div>
//     )
// }

