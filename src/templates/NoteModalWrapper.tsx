import { TComponent } from "../utils/type"

export const NoteModalWrapper = ({children}:TComponent) => {
    return (
        <div className="fixed inset-0 flex items-center w-full bg-slate-900/70 text-white z-50">
            <div className="bg-sky-400 p-8 rounded-lg max-w-6xl mx-auto">
                {children}
            </div>
        </div>
    )
}