import { Dispatch, SetStateAction } from "react"

export const handleNextStep = (setStep:Dispatch<SetStateAction<number>>) => {
    setStep((prevStep) => prevStep + 1)
}

export const handlePreviousStep = (setStep:Dispatch<SetStateAction<number>>) => {
    setStep((prevStep) => prevStep - 1)
}

export const openGuideModal = (setIsGuideOpen:Dispatch<SetStateAction<boolean>>) => {
    setIsGuideOpen(true)
}

export const closeGuideModal = (setIsGuideOpen:Dispatch<SetStateAction<boolean>>, setStep:Dispatch<SetStateAction<number>>) => {
    setIsGuideOpen(false)
    setStep(1)
}

export const openNoteModal = (setIsGuideOpen:Dispatch<SetStateAction<boolean>>) => {
    setIsGuideOpen(true)
}

export const closeNoteModal = (setIsGuideOpen:Dispatch<SetStateAction<boolean>>) => {
    setIsGuideOpen(false)
}