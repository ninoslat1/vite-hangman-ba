import { TComponent } from "../utils/type"

export const NoteModalWrapper = ({children}:TComponent) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center w-full bg-slate-900/70 text-white z-10">
            <div className="bg-[#D6989C] p-8 rounded-lg max-w-xs lg:max-w-md xl:max-w-md 2xl:max-w-md mx-auto relative">
                {children}
            </div>
        </div>
    )
}