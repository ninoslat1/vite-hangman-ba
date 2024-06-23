import { FC } from "react"
import { TLoading } from "../utils/type"

export const LoadingComponent:FC<TLoading> = ({text}) => {
  return  (
      <div className="fixed inset-0 flex items-center justify-center z-50 text-white">
        <span className="loading loading-dots loading-lg"></span><p className="p-5">{text}</p>
      </div>
    )
}