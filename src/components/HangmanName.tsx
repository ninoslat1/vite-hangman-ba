import { HangmanNameProps } from "../type"

export const HangmanName = ({data, letters}:HangmanNameProps) => {
    
    return (
        <div className="flex gap-1 text-xl py-[1.075rem] laptop:text-3xl desktop:text-4xl font-bold uppercase font-os">
            {data.toLowerCase().split("").map((letter,index) => (
                <span className={letters.includes(letter) ? "text-[#CFF1FB]" : "border-b-2 border-[#2f89e3]"} key={index}>
                    <span className={letters.includes(letter) ? "visible" : "invisible"}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}