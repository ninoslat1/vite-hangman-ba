import { create } from "zustand"

export const useHangmanStore = create((set) => ({
    data: 0,
    setData: (value:number) => set({data: value})
}))