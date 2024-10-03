import { THangmanClue } from "../utils/type"

export const HangmanClue = ({squadType, profile, rarity, school}:THangmanClue) => {
    return (
        <div className="sm:pb-2 pb-4 italic">
            {squadType && profile && rarity ? (
                    <div className="mx-auto py-4 font-bold">
                        <p className="text-center text-xl font-bold font-qs py-2 text-[#c6898d] font-kanit">Clue</p>
                        <div className="flex gap-4 font-kanit">
                            <div className="desktop:py-0 laptop:py-0 hover:cursor-pointer">
                                <div className="before:w-[15rem] tooltip tooltip-bottom flex items-center" data-tip={`${squadType} in ${school.replace(/([a-z])([A-Z]+)/g, '$1 $2')}`}>
                                    <p className="bg-transparent border-none text-[#FCFBB6] hover:bg-transparent">Position</p>
                                </div>

                            </div>
                            <div className="desktop:py-0 laptop:py-0 hover:cursor-pointer">
                                <div className="before:w-[15rem] tooltip tooltip-bottom flex items-center" data-tip={profile}>
                                    <p className="bg-transparent border-none text-[#FCFBB6] hover:bg-transparent">Profile</p>
                                </div>
                            </div> 
                            <div className="desktop:py-0 laptop:py-0 hover:cursor-pointer">
                                <div className="before:w-[15rem] tooltip tooltip-bottom flex items-center" data-tip={rarity}>
                                    <p className="bg-transparent border-none text-[#FCFBB6] hover:bg-transparent">Rarity</p>
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
