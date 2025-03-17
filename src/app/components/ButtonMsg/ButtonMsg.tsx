'use client';

import React, { useState } from 'react';

// Definindo a interface para as props
interface ButtonMSGProps {
  text: string;
  width: string;
  height: string;
  modalMessage: string;
}

const ButtonMSG: React.FC<ButtonMSGProps> = ({ text, width, height, modalMessage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white transition duration-300 ease-in-out font-thin cursor-pointer hover:shadow-lg hover:scale-105"
        style={{ width, height }}
      >
        {text}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <p>{modalMessage}</p>
            <button onClick={closeModal} className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ButtonMSG;