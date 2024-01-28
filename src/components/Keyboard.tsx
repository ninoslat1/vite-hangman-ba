import { TKeyboard } from "../type";
import { KEYS } from "../utils/Keys";

export const Keyboard = ({addGuessLetter}:TKeyboard) => {
  return (
    <div className="grid grid-cols-12 gap-2 px-2 py-5 md:block">
      {KEYS.map((key) => {
        return (
          <button
            key={key}
            onClick={() => addGuessLetter(key)}
            className="cursor-pointer bg-[#dae8ef] text-[#4776a2] hover:bg-[#4776a2] hover:text-[#dae8ef] duration-300 text-sm laptop:text-lg desktop:text-lg font-bold uppercase p-1 md:m-1 2xl:m-2 2xl:p-4 rounded-lg md:col-span-2"
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};