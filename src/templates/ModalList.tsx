import { useState } from 'react';
import { steps } from '../utils/ModalList';
import { MultistepModalProps } from '../interface';

const MultistepModal: React.FC<MultistepModalProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClick = () => {
    onClose();
  };

  const NextButton: React.FC = () => {
    return (
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleNextStep}>
        Next
      </button>
    )
  }

  const FinishButton: React.FC = () => {
    return (
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={handleClick}>
        Finish
      </button>
    )
  }

  const BackButton: React.FC = () => {
    return (
      <button className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${currentStep === 0 ? 'hidden' : ''}`} onClick={handlePreviousStep}>
        Back
      </button>
    )
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-[5vw] md:px-[25vw]">
      <div className="bg-slate-900 p-6 rounded shadow-lg">
        <div className='divider divider-primary'>
          <h2 className="text-2xl font-bold mb-4 font-cabin pt-2.5">{steps[currentStep].title}</h2>
        </div>
        <p className="mb-4 font-kanit">{steps[currentStep].content}</p>
        <blockquote className='text-center text-xl italic py-2.5'>{steps[currentStep].blockquote}</blockquote>
        <div className="flex justify-between">
          <BackButton/>
          {currentStep === steps.length - 1 ? (
            <FinishButton/>
          ) : (
            <NextButton/>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultistepModal;