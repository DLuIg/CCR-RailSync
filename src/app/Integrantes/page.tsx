import React from 'react';
import Image from 'next/image';
import Header from '../components/Header/Header';

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

            <main className='flex flex-col justify-center items-center p-5 h-screen font-thin bg-linear-to-r/oklab from-indigo-500 to-teal-400'>
                <div className='boxIntegrantes flex flex-wrap justify-center gap-9'>
                    <div className='cardIntegrante text-lg rounded-lg hover:border-2 hover:border-white hover:shadow-lg transition duration-300 ease-in-out'>
                        <Image 
                            src="/assets/lucas_higuti.jpg" 
                            width={200} 
                            height={200} 
                            alt="Lucas" 
                            className='w-36 sm:w-40 lg:w-48 h-36 sm:h-40 lg:h-48 object-cover rounded-full imgIntegrantes'
                        />
                        <div className="text-center mt-3">
                            <h1 className="text-base sm:text-lg lg:text-xl">Lucas Higuti Fontanezi</h1>
                            <p className="text-sm sm:text-base">RM: 561120</p>
                        </div>
                    </div>

                    <div className="cardIntegrante text-lg rounded-lg hover:border-2 hover:border-white hover:shadow-lg transition duration-300 ease-in-out">
                        <Image
                            src="/assets/mar.png"
                            width={200}
                            height={200}
                            alt="Davi"
                            className='w-36 sm:w-40 lg:w-48 h-36 sm:h-40 lg:h-48 object-cover rounded-full imgIntegrantes'
                        />
                        <div className="text-center mt-3">
                            <h1 className="text-base sm:text-lg lg:text-xl">Davi Cavalcanti Jorge</h1>
                            <p className="text-sm sm:text-base">RM: 559873</p>
                        </div>
                    </div>

                    <div className='cardIntegrante text-lg rounded-lg hover:border-2 hover:border-white hover:shadow-lg transition duration-300 ease-in-out'>
                        <Image 
                            src="/assets/igao.jpg" 
                            width={200} 
                            height={200} 
                            alt="Igor"
                            className='w-36 sm:w-40 lg:w-48 h-36 sm:h-40 lg:h-48 object-cover rounded-full imgIntegrantes'
                        />
                        <div className="text-center mt-3">
                            <h1 className="text-base sm:text-lg lg:text-xl">Igor Neris Soares</h1>
                            <p className="text-sm sm:text-base">RM: 560088</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}