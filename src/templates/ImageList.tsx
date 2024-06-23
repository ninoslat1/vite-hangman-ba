/**Importing Asset for Production */
import stickerSleepPng from "@assets/sticker_sleep.png"
import stickerSleepWebp from "@assets/sticker_sleep.webp"
import stickerDefaultPng from "@assets/sticker.png"
import stickerDefaultWebp from "@assets/sticker.webp"
import stickerSuprisedPng from "@assets/sticker_kaget.png"
import stickerSuprisedWebp from "@assets/sticker.webp"
import stickerPanicPng from "@assets/sticker_3.png"
import stickerPanicWebp from "@assets/sticker_3.webp"
import stickerSuperPanicPng from "@assets/sticker_4.png"
import stickerSuperPanicWebp from "@assets/sticker_4.webp"
import stickerSoulLeavePng from "@assets/sticker_final.png"
import stickerSoulLeaveWebp from "@assets/sticker_final.webp"
import bgImgPng from "@assets/bg.png"
import bgImgWebp from "@assets/bg.webp"
import clueImgPng from "@assets/clue.png"
import clueImgWebp from "@assets/clue.webp"
import finalClueImgPng from "@assets/finalClue.png"
import finalClueImgWebp from "@assets/finalClue.webp"

export const startImg = (
    <picture>
        <source srcSet={stickerSleepWebp} type="image/webp" />
        <source srcSet={stickerSleepPng} type="image/png" />
        <img src={stickerSleepPng} alt="Aru Sleep Chibi Image" loading="lazy"/>
    </picture>
)

export const secondImg = (
    <picture>
        <source srcSet={stickerDefaultWebp} type="image/webp" />
        <source srcSet={stickerDefaultPng} type="image/png" />
        <img src={stickerDefaultPng} alt="Aru Wake Up Chibi Image" loading="lazy"/>
    </picture>
)

export const thirdImg = (
    <picture>
        <source srcSet={stickerSuprisedWebp} type="image/webp" />
        <source srcSet={stickerSuprisedPng} type="image/png" />
        <img src={stickerSuprisedPng} alt="Aru Startled Chibi Image"  loading="lazy"/>
    </picture>
)

export const fourthImg = (
    <picture>
        <source srcSet={stickerPanicWebp} type="image/webp" />
        <source srcSet={stickerPanicPng} type="image/png" />
        <img src={stickerPanicPng} alt="Aru Confused Chibi Image"  loading="lazy"/>
    </picture>
)

export const fifthImg = (
    <picture>
        <source srcSet={stickerSuperPanicWebp} type="image/webp" />
        <source srcSet={stickerSuperPanicPng} type="image/png" />
        <img src={stickerSuperPanicPng} alt="Aru Shocked Chibi Image"  loading="lazy"/>
    </picture>
)

export const lastImg = (
    <picture>
        <source srcSet={stickerSoulLeaveWebp} type="image/webp" />
        <source srcSet={stickerSoulLeavePng} type="image/png" />
        <img src={stickerSoulLeavePng} alt="Aru Cry Chibi Image"  loading="lazy"/>
    </picture>
)

export const backImage = (
    <picture>
        <source srcSet={bgImgWebp} type="image/webp" className="absolute h-full w-screen object-cover brightness-50 -z-20 blur-sm"/>
        <source srcSet={bgImgPng} type="image/png" className="absolute h-full w-screen object-cover brightness-50 -z-20 blur-sm"/>
        <img src={bgImgPng} alt="Background Image" className="absolute h-full w-screen object-cover brightness-50 -z-20 blur-sm" loading="lazy"/>
    </picture>
)

export const guideOneImg = (
    <picture>
        <source srcSet={clueImgWebp} type="image/webp" />
        <source srcSet={clueImgPng} type="image/png" />
        <img src={clueImgPng} alt="Clue Image" className="bg-center"  loading="lazy"/>
    </picture>
)

export const finalGuideImg = (
    <picture>
        <source srcSet={finalClueImgWebp} type="image/webp" />
        <source srcSet={finalClueImgPng} type="image/png" />
        <img src={finalClueImgPng} alt="Clue Image" className="bg-center"  loading="lazy"/>
    </picture>
)