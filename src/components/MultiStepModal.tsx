import { useState } from 'react';
import { finalGuideImg, guideOneImg } from '../templates/ImageList';
import { RightDownArrow } from '../templates/IconList';
import { closeGuideModal, handleNextStep, handlePreviousStep, openGuideModal } from '../utils/handleModal';
import { DeveloperNotes } from './DeveloperNotes';
import { GuideModalWrapper } from '../templates/GuideModalWrapper';
import { NoteModalWrapper } from '../templates/NoteModalWrapper';

export const MultiStepModal = () => {
  const [step, setStep] = useState<number>(1)
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false)
  const [isNoteOpen, setIsNoteOpen] = useState<boolean>(false)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)

  const renderModalContent = (currentStep: number) => {
    switch (currentStep) {
      case 1:
        return (
          <div data-aos="fade-up" data-aos-duration="500">
            <RightDownArrow setIsGuideOpen={setIsGuideOpen}/>
            <h2 className='modal-head'>Welcome to Kivotos Hangman</h2>
            <p>Welcome to Blue Archive Hangman game. In this game, you must guess the student name before <span className='line-through font-bold pr-1'>Bak</span>Aru got totally hanged 😣</p>
          </div>
        );
      case 2:
        return (
          <div data-aos="fade-up" data-aos-duration="500">
            <RightDownArrow setIsGuideOpen={setIsGuideOpen}/>
            <h2 className='modal-head'>Guide: Part 1</h2>
            <div className='mx-auto'>
              {guideOneImg}
              <div>
                <p>We provide some clue for Sensei when playing this game. Simply by hovering over the clue button. <span className='font-bold pr-1'>(For the sake of Problem Solver 86)</span></p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div data-aos="fade-up" data-aos-duration="500">
            <RightDownArrow setIsGuideOpen={setIsGuideOpen}/>
            <h2 className='modal-head'>Guide: Part 2</h2>
            <p>We provide an additional keyboard component for guessing the student name. (If the keyboard doesn't work, Sensei can send ticket to Hare 😊<span className='line-through font-bold px-1'>and wait one week to resolve the issue</span>)</p>
          </div>
        );
      case 4:
        return (
          <div data-aos="fade-up" data-aos-duration="500">
            <RightDownArrow setIsGuideOpen={setIsGuideOpen}/>
            <h2 className='modal-head'>Guide: Part 3</h2>
            {finalGuideImg}
            <div>
              <p className='text-center'>If Sensei fail, then <span className='font-bold line-through'>ARUU GA SHINDAAA!!!</span></p>
            </div>
          </div>
        )
      }
    }

  return (
    <>
      <div className="text-sky-200 font-bold text-xs inline-flex gap-2.5 items-center w-full justify-between px-5">
        <button onClick={() => openGuideModal(setIsGuideOpen)}>How to Play</button>
        <div className="justify-between">
          <DeveloperNotes />
        </div>
      </div>

      {isGuideOpen ? (
        <GuideModalWrapper>
          <div className="content-wrapper">
            <div className={`content-item ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              {renderModalContent(step)}
            </div>
          </div>

          <div className="flex justify-between">
            {step > 1 && (
            <button className={`btn-main ${isAnimating ? "invisible" : ""}`} onClick={() => handlePreviousStep(setStep, setIsAnimating, isAnimating)} disabled={isAnimating}>
                Previous
              </button>
            )}

            {step < 4 ? (
              <button className={`btn-main ${isAnimating ? "invisible" : ""}`} onClick={() => handleNextStep(setStep, setIsAnimating, isAnimating)} disabled={isAnimating}>
                Next
              </button>
            ) : (
              <button className={`btn-main ${isAnimating ? "invisible" : ""}`} onClick={() => closeGuideModal(setIsGuideOpen, setStep)}>
                Close
              </button>
            )}
          </div>
        </GuideModalWrapper>
      ) : null}

      {isNoteOpen ? (
        <>
          <NoteModalWrapper>
            <RightDownArrow setIsGuideOpen={setIsNoteOpen}/>
          </NoteModalWrapper>
        </>
      ): null}
    </>
    );
  };

export default MultiStepModal;