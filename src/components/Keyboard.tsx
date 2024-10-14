import { TKeyboard } from "../utils/type";
import { KEYS } from "../utils/Keys";

const Keyboard = ({activeLetters, inactiveLetters, addGuessLetter, disabled = false}:TKeyboard) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {KEYS.map((key) => {
        const isActiveLetters = activeLetters.includes(key)
        const isInactiveLetters = inactiveLetters.includes(key)
        
        return (
          <button
            key={key}
            onClick={() => addGuessLetter(key)}
            className={`cursor-pointer bg-[#c6898d] text-[#FCFBB6] hover:bg-[#FCFBB6] hover:text-[#c6898d] text-xs duration-300 laptop:text-lg desktop:text-lg font-bold uppercase m-2 p-2.5 rounded-lg md:col-span-2 ${isActiveLetters ? "bg-[hsl(327,35%,40%)] text-[white]" : ""} ${isInactiveLetters ? "opacity-30" : ""}`}
            disabled={isActiveLetters || isInactiveLetters || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard