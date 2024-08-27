import { Dispatch, SetStateAction } from "react"

export const handlePreviousStep = (
    setStep: Dispatch<SetStateAction<number>>,
    setIsAnimating: Dispatch<SetStateAction<boolean>>,
    isAnimating: boolean
  ) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setStep(prevStep => prevStep - 1);
        setIsAnimating(false);
      }, 300); // Sesuaikan dengan durasi animasi CSS
    }
  };
  
  export const handleNextStep = (
    setStep: Dispatch<SetStateAction<number>>,
    setIsAnimating: Dispatch<SetStateAction<boolean>>,
    isAnimating: boolean
  ) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setStep(prevStep => prevStep + 1);
        setIsAnimating(false);
      }, 300); // Sesuaikan dengan durasi animasi CSS
    }
  };

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