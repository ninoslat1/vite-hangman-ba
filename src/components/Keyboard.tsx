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
            className={`cursor-pointer bg-[#dae8ef] text-[#4776a2] hover:bg-[#4776a2] hover:text-[#dae8ef] duration-300 laptop:text-lg desktop:text-lg font-bold uppercase m-2 p-4 rounded-lg md:col-span-2 ${isActiveLetters ? "bg-[hsl(200,100%,50%)] text-[white]" : ""} ${isInactiveLetters ? "opacity-30" : ""}`}
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