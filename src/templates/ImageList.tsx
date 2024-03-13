/**Importing Asset for Production */
import stickerSleep from "@assets/sticker_sleep.png"
import stickerDefault from "@assets/sticker.png"
import stickerSuprised from "@assets/sticker_kaget.png"
import stickerPanic from "@assets/sticker_3.png"
import stickerSuperPanic from "@assets/sticker_4.png"
import stickerSoulLeave from "@assets/sticker_final.png"
import bgImg from "@assets/bg.png"
import clueImg from "@assets/clue.png"

export const startImg = (
    <img src={stickerSleep} alt="Aru Sleep Chibi Image" loading="lazy"/>
)

export const secondImg = (
    <img src={stickerDefault} alt="Aru Wake Up Chibi Image"  loading="lazy"/>
)

export const thirdImg = (
    <img src={stickerSuprised} alt="Aru Startled Chibi Image"  loading="lazy"/>
)

export const fourthImg = (
    <img src={stickerPanic} alt="Aru Confused Chibi Image"  loading="lazy"/>
)

export const fifthImg = (
    <img src={stickerSuperPanic} alt="Aru Shocked Chibi Image"  loading="lazy"/>
)

export const lastImg = (
    <img src={stickerSoulLeave} alt="Aru Cry Chibi Image"  loading="lazy"/>
)

export const backImage = (
    <img src={bgImg} alt="Background Image" className="absolute h-full w-screen object-cover brightness-50 -z-20 blur-sm"  loading="lazy"/>
)

export const guideOneImg = (
    <img src={clueImg} alt="Clue Image" className="bg-center"  loading="lazy"/>
)