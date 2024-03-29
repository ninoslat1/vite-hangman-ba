import { useState } from 'react';
import { guideOneImg } from '../templates/ImageList';
import { RightDownArrow } from '../templates/IconList';
import { closeModal, handleNextStep, handlePreviousStep, openModal } from '../utils/handleModal';

export const MultiStepModal = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const renderModalContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <RightDownArrow setIsOpen={setIsOpen}/>
            <h2 className='modal-head'>Welcome to Kivotos Hangman</h2>
            <p>Welcome to Blue Archive Hangman game. In this game, you must guess the student name before <span className='line-through font-bold pr-1'>Bak</span>Aru got totally hanged 😣</p>
          </div>
        );
      case 2:
        return (
          <div>
            <RightDownArrow setIsOpen={setIsOpen}/>
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
          <div>
            <RightDownArrow setIsOpen={setIsOpen}/>
            <h2 className='modal-head'>Guide: Part 2</h2>
            <p>We provide an additional keyboard component for guessing the student name. (If the keyboard doesn't work, Sensei can send ticket to Hare 😊<span className='line-through font-bold px-1'>and wait one week to resolve the issue</span>)</p>
          </div>
        );
      case 4:
        return (
          <div>
            
          </div>
        )
      default:
        return null;
    }
  };

  return (
    <div className='absolute right-2.5 bottom-2.5'>
      <div className="text-sky-200 font-bold text-xs flex gap-2.5 items-center">
        <button onClick={() => openModal(setIsOpen)}>How to Play</button>
        <button onClick={() => openModal(setIsOpen)}>For Developer</button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center w-full bg-slate-900/70 text-white">
          <div className="bg-sky-400 p-8 rounded-lg max-w-md mx-auto">
            {renderModalContent()}

            <div className="flex justify-between">
              {step > 1 && (
                <button className="btn-main" onClick={() => handlePreviousStep(setStep)}>
                  Previous
                </button>
              )}

              {step < 3 ? (
                <button className="btn-main" onClick={() => handleNextStep(setStep)}>
                  Next
                </button>
              ) : (
                <button className="btn-main" onClick={() => closeModal(setIsOpen, setStep)}>
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepModal;