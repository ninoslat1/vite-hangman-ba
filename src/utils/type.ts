import { Dispatch, ReactNode, SetStateAction } from "react";

export type TStudent = {
    id: number;
    name: string;
    rarity: string;
    squadType: string;
    school: string;
    profile: string;
}

export type THangmanClue = {
    squadType: string
    profile: string
    rarity: string
    school: string
    name: string
}

export type THangmanName = {
    reveal: boolean | null
    letters: string[]
    data: string
}

export type THangmanDrawing = {
    data: number
}

export type TKeyboard = {
    disabled: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessLetter: (letter: string) => void
  }

export type TModal = {
    title: string
    content: string
    image: string
    blockquote: string
}

export type TLoading = {
    text: string
}

export type TRightDownArrow = {
    setIsGuideOpen: Dispatch<SetStateAction<boolean>>
}

export type TComponent = {
    children: ReactNode
}

export type TResultComponent = {
    win?: boolean
    lose?: boolean
}

export type TStatusClose = {
    setStatusOpen: Dispatch<SetStateAction<boolean>>
}

export type TAnimatedStep = {
    children: ReactNode
    hasAnimated: boolean
    setHasAnimated: Dispatch<SetStateAction<boolean>>
}