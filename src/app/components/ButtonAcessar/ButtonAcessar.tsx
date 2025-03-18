import Link from 'next/link';

interface ButtonAcessarProps {
  cor: string; // Ex: 'bg-blue-600'
  texto: string; // Ex: 'Acessar'
  width?: string; // Tornado opcional
  height?: string; // Tornado opcional
  link?: string; // Ex: '/funcionalidades'
}

function ButtonAcessar({
  cor,
  texto,
  width, 
  height , 
  link,
}: ButtonAcessarProps) {
  const buttonElement = (
    <button
      className={`${cor} ${width} ${height} py-1  px-4  rounded-md transition duration-300 ease-in-out text-black font-medium hover:bg-gray-300 cursor-pointer hover:shadow-lg hover:scale-105  `}
    >
      {texto}
    </button>
  );

  return (
    <div>
      {link ? (
        <Link href={link} passHref>
          {buttonElement}
        </Link>
      ) : (
        buttonElement
      )}
    </div>
  );
}

export default ButtonAcessar;