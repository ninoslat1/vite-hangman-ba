import { THangmanClue } from "../utils/type"

export const HangmanClue = ({data}:THangmanClue) => {

    return (
        <div className="sm:pb-2 pb-4 italic">
            {data ? (
                    <div key={data.id} className="mx-auto py-4 font-bold">
                        <p className="text-center text-xl font-bold font-qs py-2 text-[#2f89e3] font-cabin">Clue</p>
                        <div className="flex gap-4 font-kanit">
                            <div className="desktop:py-0 laptop:py-0 hover:cursor-pointer">
                                <div className="before:w-[15rem] tooltip tooltip-bottom flex items-center" data-tip={`${data.squadType} in ${data.school!.replace(/([a-z])([A-Z]+)/g, '$1 $2')}`}>
                                    <p className="bg-transparent border-none text-[#CFF1FB] hover:bg-transparent">Position</p>
                                </div>

                            </div>
                            <div className="desktop:py-0 laptop:py-0 hover:cursor-pointer">
                                <div className="before:w-[15rem] tooltip tooltip-bottom flex items-center" data-tip={data.profile!.replace(new RegExp(`[^.!?]*\\b${data.name!.match(/\b\w+\b/)![0]}\\b[^.!?]*[.!?]`, 'g'), '')}>
                                    <p className="bg-transparent border-none text-[#CFF1FB] hover:bg-transparent">Profile</p>
                                </div>
                            </div> 
                            <div className="desktop:py-0 laptop:py-0 hover:cursor-pointer">
                                <div className="before:w-[15rem] tooltip tooltip-bottom flex items-center" data-tip={data.rarity}>
                                    <p className="bg-transparent border-none text-[#CFF1FB] hover:bg-transparent">Rarity</p>
                                </div>
                            </div>
                        </div>
                    </div>
            ) : (
                <div className="min-w-screen min-h-screen inset-0 flex items-center justify-center z-50 text-white">
                    <span className="loading loading-dots loading-lg"></span><p className="p-5">Load Clue</p>
                </div>
            )}
        </div>
    )
} 
