import { TComponent } from "../utils/type"

export const GuideModalWrapper = ({children}:TComponent) => {
    return (
        <div className="fixed inset-0 flex items-center w-full bg-slate-900/70 text-white">
            <div className="bg-sky-400 p-8 rounded-lg max-w-md mx-auto">
                {children}
            </div>
        </div>
    )
}