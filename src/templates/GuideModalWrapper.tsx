import { TComponent } from "../utils/type"

export const GuideModalWrapper = ({children}:TComponent) => {
    return (
        <div className="fixed inset-0 flex items-center w-full bg-slate-900/70 text-[#FCFBB6] z-10">
            <div className="bg-[#c6898d] p-8 rounded-lg max-w-xs lg:max-w-md xl:max-w-md 2xl:max-w-md mx-auto">
                {children}
            </div>
        </div>
    )
}