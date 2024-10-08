import { THangmanName } from "../utils/type"

export const HangmanName = ({data, letters, reveal = false}:Partial<THangmanName>) => {
    
    return (
        <div className="flex gap-1 text-xl py-[1.075rem] laptop:text-3xl desktop:text-4xl font-bold uppercase font-os">
            {data?.toLowerCase().split("").map((letter,index) => (
                <span className={letters?.includes(letter) || reveal ? "text-[#D6B6CC]" : "border-b-2 border-[#c6898d]"} key={index}>
                    <span className={`${letters?.includes(letter) || reveal ? "visible" : "invisible"} ${!letters?.includes(letter) && reveal ? "text-red-400" : "text-[#D6B6CC]"}`}>
                        {letter.replace(/[^a-zA-Z]/g, '')}
                    </span>
                </span>
            ))}
        </div>
    )
}