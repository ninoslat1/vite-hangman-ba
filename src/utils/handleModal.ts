import { Dispatch, SetStateAction } from "react"

export const handleNextStep = (setStep:Dispatch<SetStateAction<number>>) => {
    setStep((prevStep) => prevStep + 1)
}

export const handlePreviousStep = (setStep:Dispatch<SetStateAction<number>>) => {
    setStep((prevStep) => prevStep - 1)
}

export const openModal = (setIsOpen:Dispatch<SetStateAction<boolean>>) => {
    setIsOpen(true)
}

export const closeModal = (setIsOpen:Dispatch<SetStateAction<boolean>>, setStep:Dispatch<SetStateAction<number>>) => {
    setIsOpen(false)
    setStep(1)
}