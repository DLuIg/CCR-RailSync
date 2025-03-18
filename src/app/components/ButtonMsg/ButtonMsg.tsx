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


  //Constante para abrir modal 
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };
  //Constante para fechar modal com botão Onclick
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className= "py-2 px-4 rounded-md bg-white hover:bg-gray-300 text-black transition duration-300 ease-in-out font-medium cursor-pointer hover:shadow-lg hover:scale-105"
        style={{ width, height }}
      >
        {text}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-linear-to-r/oklab from-indigo-500 to-teal-400">
          <div className="bg-gray-200 p-4 rounded shadow-md  max-w-lg">
            <p>Seu chamado de {modalMessage} foi aberto Sr Maquinista. A equipe do CCO irá tomar medidas protetivas sobre a ocorrência!</p>
            <button onClick={closeModal} className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 flex items-center justify-center ">
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ButtonMSG;