import { TKeyboard } from "../type";
import { KEYS } from "../utils/Keys";

export const Keyboard = ({activeLetters, inactiveLetters, addGuessLetter}:TKeyboard) => {
  return (
    <div className="grid grid-cols-12 gap-2 px-2 py-5 md:block">
      {KEYS.map((key) => {
        const isActiveLetters = activeLetters.includes(key)
        const isInactiveLetters = inactiveLetters.includes(key)
        
        return (
          <button
            key={key}
            onClick={() => addGuessLetter(key)}
            className={`cursor-pointer bg-[#dae8ef] text-[#4776a2] hover:bg-[#4776a2] hover:text-[#dae8ef] duration-300 text-sm laptop:text-lg desktop:text-lg font-bold uppercase p-1 md:m-1 2xl:m-2 2xl:p-4 rounded-lg md:col-span-2 ${isActiveLetters ? "bg-[hsl(200,100%,50%)] text-[white]" : ""} ${isInactiveLetters ? "opacity-30" : ""}`}
            disabled={isActiveLetters || isInactiveLetters}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};