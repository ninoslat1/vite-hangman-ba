import React, { useState } from 'react';

export const MultiStepModal = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Lakukan sesuatu dengan data yang dikumpulkan
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setStep(1);
  };

  const renderModalContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Personal Information</h2>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Account Information</h2>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Confirmation</h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <button className="btn-primary" onClick={openModal}>
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            {renderModalContent()}

            <div className="flex justify-between">
              {step > 1 && (
                <button className="btn-secondary" onClick={handlePreviousStep}>
                  Previous
                </button>
              )}

              {step < 3 ? (
                <button className="btn-primary" onClick={handleNextStep}>
                  Next
                </button>
              ) : (
                <button className="btn-primary" onClick={handleSubmit}>
                  Submit
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