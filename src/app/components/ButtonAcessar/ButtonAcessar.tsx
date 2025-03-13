import Link from 'next/link';

interface ButtonAcessarProps {
  cor: string; // Ex: 'bg-blue-600'
  texto: string; // Ex: 'Acessar'
  width: string;
  height:string; // Ex: 'text-lg'
  link: string; // Ex: '/funcionalidades'
}

function ButtonAcessar({
  cor,
  texto,
  width,
  height,
  link,
}: ButtonAcessarProps) {
  return (
    <div>
      <Link href={link} passHref>
        <button
          className={
            `buttonAcessar ${cor} ${width} ${height} py-2 px-4 rounded-md transition duration-300 ease-in-out text-white font-thin hover:bg-blue-900 cursor-pointer hover:shadow-lg hover:scale-105`} // Configuração padrão para nosso button!
        >
          {texto}
        </button>
      </Link>
    </div>
  );
}

export default ButtonAcessar;