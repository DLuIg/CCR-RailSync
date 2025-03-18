import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  leftLink: string;
  rightLink: string;
  leftImageSrc: string;
  rightImageSrc: string;
  altTextLeft: string;
  altTextRight: string;
  title: string;
}

function Header({
  leftLink,
  rightLink,
  leftImageSrc,
  rightImageSrc,
  altTextLeft,
  altTextRight,
  title,
}: HeaderProps) {
  return (
    <header className="flex justify-between items-center bg-white py-2.5 px-7.5 font-inter">
      <a href={leftLink}>
        <Image
          src={leftImageSrc}
          alt={altTextLeft}
          width={20}
          height={20}
          className="w-6 h-6 sm:w-8 sm:h-8" // Ajuste para responsividade
        />
      </a>

      <div className="text-center text-gray-900 font-sans font-thin text-xl sm:text-3xl">
        {/* Ajuste de fonte para responsividade */}
        {title}
      </div>

      <a href={rightLink}>
        <Image
          src={rightImageSrc}
          alt={altTextRight}
          width={20}
          height={20}
          className="w-6 h-6 sm:w-8 sm:h-8" // Ajuste para responsividade
        />
      </a>
    </header>
  );
}

export default Header;