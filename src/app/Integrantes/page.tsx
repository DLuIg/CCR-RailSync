import React from 'react';
import Image from 'next/image';
import Header from '../components/Header/Header';
import Link from 'next/link';

export default function Integrantes() {
    return (
        <>
            <Header
                leftLink="/Funcionalidades"  
                rightLink="/Menu"
                leftImageSrc="/assets/return.png"
                rightImageSrc="/assets/menu.png"
                altTextLeft="Voltar"
                altTextRight="Menu"
                title="Quem somos? "
            />

            <main className='flex flex-col justify-center items-center p-5 min-h-screen font-thin bg-gradient-to-r from-indigo-500 to-teal-400'>
                <div className='boxIntegrantes flex flex-wrap justify-center gap-10 mx-auto'>
                    <div className='cardIntegrante w-full max-w-xs text-lg rounded-lg p-4 bg-white shadow-md'>
                        <Image 
                            src="/assets/lucas_higuti.jpg" 
                            width={128} 
                            height={128} 
                            alt="Lucas" 
                            className='w-32 sm:w-36 h-32 sm:h-36 object-cover rounded-full mx-auto transition duration-300 ease-in-out hover:shadow-lg hover:scale-105'
                        />
                        <div className="text-center mt-3">
                            <h1 className="text-base sm:text-lg">Lucas Higuti Fontanezi</h1>
                            <p className="text-sm sm:text-base">RM: 561120</p>
                        </div>
                        <div className='flex justify-center gap-4 mt-4'>
                            <Link href="https://github.com/hlucass05">
                                <Image
                                src="/assets/Github.png"
                                alt='Github'
                                width={30}
                                height={30}
                                className='hover:opacity-80'
                                />
                            </Link>

                            <Link href="https://www.linkedin.com/in/igor-neris-soares-alves-197a232b5/">
                                <Image
                                src="/assets/iconLinkedin.png"
                                alt='Linkedin'
                                width={30}
                                height={30}
                                className='hover:opacity-80'
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="cardIntegrante w-full max-w-xs text-lg rounded-lg p-4 bg-white shadow-md">
                        <Image
                            src="/assets/mar.png"
                            width={128} 
                            height={128} 
                            alt="Davi"
                            className='w-32 sm:w-36 h-32 sm:h-36 object-cover rounded-full mx-auto transition duration-300 ease-in-out hover:shadow-lg hover:scale-105'
                        />
                        <div className="text-center mt-3">
                            <h1 className="text-base sm:text-lg">Davi Cavalcanti Jorge</h1>
                            <p className="text-sm sm:text-base">RM: 559873</p>
                        </div>
                        <div className='flex justify-center gap-4 mt-4'>
                            <Link href="https://github.com/daca2709">
                                <Image
                                src="/assets/Github.png"
                                alt='Github'
                                width={30}
                                height={30}
                                className='hover:opacity-80'
                                />
                            </Link>

                            <Link href="https://www.linkedin.com/in/davi-jorge-468186214/">
                                <Image
                                src="/assets/iconLinkedin.png"
                                alt='Linkedin'
                                width={30}
                                height={30}
                                className='hover:opacity-80'
                                />
                            </Link>
                        </div>
                    </div>

                    <div className='cardIntegrante w-full max-w-xs text-lg rounded-lg p-4 bg-white shadow-md'>
                        <Image 
                            src="/assets/igao.jpg" 
                            width={128} 
                            height={128} 
                            alt="Igor"
                            className='w-32 sm:w-36 h-32 sm:h-36 object-cover rounded-full mx-auto transition duration-300 ease-in-out hover:shadow-lg hover:scale-105'
                        />
                        <div className="text-center mt-3">
                            <h1 className="text-base sm:text-lg">Igor Neris Soares</h1>
                            <p className="text-sm sm:text-base">RM: 560088</p>
                        </div>
                        <div className='flex justify-center gap-4 mt-4'>
                            <Link href="https://github.com/Igo00r">
                                <Image
                                src="/assets/Github.png"
                                alt='Github'
                                width={30}
                                height={30}
                                className='hover:opacity-80'
                                />
                            </Link>

                            <Link href="https://www.linkedin.com/in/igor-neris-soares-alves-197a232b5/">
                                <Image
                                src="/assets/iconLinkedin.png"
                                alt='Linkedin'
                                width={30}
                                height={30}
                                className='hover:opacity-80'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}