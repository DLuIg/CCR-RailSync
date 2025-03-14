import React, { useState } from 'react';

const ButtonMsg = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="flex justify-center mt-5">
      <button
        onClick={toggleMessage}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Mostrar Mensagem
      </button>
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg border border-blue-500 shadow-lg max-w-sm w-full text-center">
            <p>Esta é a mensagem sofisticada!</p>
            <button
              onClick={toggleMessage}
              className="mt-3 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonMsg;