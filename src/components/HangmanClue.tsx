import { HangmanClueProps} from "../type"

export const HangmanClue = ({data}:HangmanClueProps) => {
    return (
        <div className="sm:pb-2 pb-4 italic">
            {data.length > 0 ? (
                data.map((character) => (
                    <div key={character.id} className="mx-auto py-4 font-bold">
                        <p className="text-center text-xl font-bold font-qs py-2 text-[#2f89e3] font-cabin">Clue</p>
                        <div className="flex gap-4 font-kanit">
                            <div className="desktop:py-0 laptop:py-0 hover:cursor-pointer">
                                <div className="before:w-[15rem] tooltip tooltip-bottom flex items-center" data-tip={`${character.squadType} in ${character.school.replace(/([a-z])([A-Z]+)/g, '$1 $2')}`}>
                                    <p className="bg-transparent border-none text-[#CFF1FB] hover:bg-transparent">Position</p>
                                </div>

                            </div>
                            <div className="desktop:py-0 laptop:py-0 hover:cursor-pointer">
                                <div className="before:w-[15rem] tooltip tooltip-bottom flex items-center" data-tip={character.profile.replace(new RegExp(`[^.!?]*\\b${character.name.match(/\b\w+\b/)![0]}\\b[^.!?]*[.!?]`, 'g'), '')}>
                                    <p className="bg-transparent border-none text-[#CFF1FB] hover:bg-transparent">Profile</p>
                                </div>
                            </div> 
                            <div className="desktop:py-0 laptop:py-0 hover:cursor-pointer">
                                <div className="before:w-[15rem] tooltip tooltip-bottom flex items-center" data-tip={character.rarity}>
                                    <p className="bg-transparent border-none text-[#CFF1FB] hover:bg-transparent">Rarity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
} 
