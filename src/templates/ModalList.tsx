import { useState } from 'react';
import { steps } from '../utils/ModalList';


const MultistepModal = () => {
  const [currentStep, setCurrentStep] = useState(0);

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

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-4">{steps[currentStep].title}</h2>
        <p className="mb-4">{steps[currentStep].content}</p>
        <div className="flex justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${
              currentStep === 0 ? 'hidden' : ''
            }`}
            onClick={handlePreviousStep}
          >
            Back
          </button>
          {currentStep === steps.length - 1 ? (
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={() => {}}>
              Finish
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={handleNextStep}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultistepModal;


