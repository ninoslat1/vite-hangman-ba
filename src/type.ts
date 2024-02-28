export type TStudent = {
    id: number;
    name: string;
    rarity: string;
    squadType: string;
    school: string;
    profile: string;
}

export type THangmanClue = {
    data: TStudent[]
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

export type TMusicPlayer = {
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  };