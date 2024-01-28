export type StudentType = {
    id: number;
    name: string;
    rarity: string;
    squadType: string;
    school: string;
    profile: string;
}

export type HangmanClueProps = {
    data: StudentType[]
}

export type HangmanNameProps = {
    letters: string[]
    data: string
}

export type HangmanDrawingProps = {
    data: number
}

export type KeyboardProps = {
    addGuessLetter: (letter: string) => void
  }

export type ModalProps = {
    title: string
    content: string
    image: string
  };