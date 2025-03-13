import React from 'react';
import Image from 'next/image';

interface HeaderProps { //Essas são as propriedades que o componente Header aceita (ou seja, se eu for alterar o componente Header, eu tenho que passar essas propriedades)
  leftLink: string; //Sendo assim, posso escolher para onde meu left link (return) vai ser direcionado para tal páigna
  rightLink: string; //Mesmo acontece para o right link, mas sempre será direcionado para o menu
  leftImageSrc: string;
  rightImageSrc: string;
  altTextLeft: string;
  altTextRight: string;
  title: string;
  
}

function Header({ //CONCEITO DE CLASSE EM POO (igual a passar PROPS para meu componente, posso altera-los e passar para o componente)
  leftLink, 
  rightLink, 
  leftImageSrc, 
  rightImageSrc, 
  altTextLeft,  
  altTextRight,
  title,
  
}: HeaderProps) {

  
  return (
    <header className="flex justify-between items-center bg-white text-3xl py-2.5 px-7.5 font-inter">
      <a href={leftLink}>
        <Image src={leftImageSrc} alt={altTextLeft} width={20} height={20} className="w-8 h-8" /> {/* IMAGE SEMPRE vai pedir para especificar o Width, então jamais esquecer!*/}
      </a>

      <div className="text-center text-gray-900 font-sans font-thin">{title}</div>

      <a href={rightLink}>
        <Image src={rightImageSrc} alt={altTextRight} width={20} height={20} className="w-8 h-8" />  
      </a>
    </header>
  );
}

export default Header;