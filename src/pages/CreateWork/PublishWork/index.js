import React from 'react'
import { useState } from 'react'
import './PublishWork.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from './components/ProgressBar'
import Step1ToNFT from './components/Step1ToNFT'
import Step2ToNFT from './components/Step2ToNFT'
import Step3ToNFT from './components/Step3ToNFT'

function PublishWork({ onCloseModal }) {
  const [isModalOpen, setModalOpen] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)
  const [isFinished, setIsFinished] = useState(false) // New state for isFinished

  const handleCloseModal = () => {
    setModalOpen(false)
    onCloseModal()
  }

  const goBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
    } else if (currentStep === 3) {
      setCurrentStep(2)
    }
  }

  const goNext = () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      setCurrentStep(3)
    }
  }

  return (
    <div>
      {isModalOpen && (
        <div className='background'>
          <div className='publishNFT-container' id='publishNFTContainer'>
            <button className='closeButton' onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faTimes} size='2x' />
            </button>
            <div className='publishNFT'>
              <div className='separator'></div>

              <ProgressBar currentStep={currentStep} />
              <div className='content-container'>
                {currentStep === 1 && <Step1ToNFT />}
                {currentStep === 2 && <Step2ToNFT />}
                {currentStep === 3 && (
                  <Step3ToNFT setIsFinished={setIsFinished} />
                )}{' '}
                {/* Pass setIsFinished as prop */}
              </div>
              <div className='separator'></div>
            </div>
            <div className='step-button-container'>
              {currentStep !== 1 && (
                <button className='preStepButton' onClick={goBack}>
                  返回
                </button>
              )}
              {currentStep !== 3 && (
                <button className='StepButton' onClick={goNext}>
                  下一步
                </button>
              )}
              {currentStep === 3 && (
                <button
                  className={`FinishButton ${isFinished ? 'active' : ''}`}
                  onClick={handleCloseModal}
                >
                  完成
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PublishWork