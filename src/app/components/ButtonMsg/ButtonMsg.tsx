'use client';

import React from 'react';

// Definindo a interface para as props
interface ButtonMSGProps {
  text: string;
  width: string;
  height: string;
  slug: string;
}

const ButtonMSG: React.FC<ButtonMSGProps> = ({ text, width, height, slug }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`http://api-java-production-db2b.up.railway.app/ChatCCO/${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-key': '1234',
        },
        body: JSON.stringify({ description: text }),
      });

      if (!response.ok) {
        throw new Error(`Erro ao criar evento: ${response.status} ${response.statusText}`);
      }

      setIsModalOpen(true);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Não foi possível criar o evento.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="py-2 px-4 rounded-md bg-white hover:bg-gray-300 text-black transition duration-300 ease-in-out font-medium cursor-pointer hover:shadow-lg hover:scale-105"
        style={{ width, height }}
      >
        {text}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-linear-to-r/oklab from-indigo-500 to-teal-400">
          <div className="bg-gray-200 p-4 rounded shadow-md max-w-lg">
            <p>Seu chamado de {text} foi aberto Sr Maquinista. A equipe do CCO irá tomar medidas protetivas sobre a ocorrência!</p>
            <button onClick={closeModal} className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded cursor-pointer hover:shadow-lg hover:scale-105 transition duration-300 flex items-center justify-center">
              Fechar
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="fixed top-0 left-0 right-0 p-4 bg-red-600 text-white text-center">
          {error}
        </div>
      )}
    </>
  );
}

export default ButtonMSG;