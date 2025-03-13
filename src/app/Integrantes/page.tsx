import React from 'react';
import Image from 'next/image';
import Header from '../components/Header/Header';





export default function Integrantes() {
    return(

        <>
            <Header
            leftLink="/Funcionalidades"  // Retornar para a página inicial (apenas colocar uma BARRA)
            rightLink="/Menu"
            leftImageSrc="/assets/return.png"
            rightImageSrc="/assets/menu.png"
            altTextLeft="Voltar"
            altTextRight="Menu"
            title="Quem somos? "
            
            ></Header>
            
            <main className='flex flex-col justify-center items-center p-5 h-screen font-thin bg-gradient-to-b from-white to-blue-300'>
                <div className='boxIntegrantes flex justify-center font-sans gap-9 '>   
                    <div className='cardIntegrante text-lg rounded-lg hover:border-2 hover:border-blue-400 hover:shadow-lg transition duration-300 ease-in-out'>
                        <Image 
                        src="/assets/lucas_higuti.jpg" 
                        width={200} 
                        height={200} 
                        alt="Lucas" 
                        className='w-50 h-50  object-cover rounded-full imgIntegrantes' />
                        <div className="text-center mt-3">
                            <h1>Lucas Higuti Fontanezi</h1>
                            <p>RM: 561120</p>
                        </div>
                    </div>

                    <div className="cardIntegrante text-lg rounded-lg hover:border-2 hover:border-blue-400 hover:shadow-lg transition duration-300 ease-in-out">
                        <Image
                            src="/assets/mar.png"
                            width={200}
                            height={200}
                            alt="Davi"
                            className="w-[200px] h-[200px] object-cover rounded-full imgIntegrantes"
                        />
                        <div className="text-center mt-3">
                            <h1>Davi Cavalcanti Jorge</h1>
                            <p>RM: 559873</p>
                        </div>
                        </div>


                    <div className='cardIntegrante text-lg rounded-lg hover:border-2 hover:border-blue-400 hover:shadow-lg transition duration-300 ease-in-out'>
                        <Image 
                        src="/assets/igao.jpg" 
                        width={200} 
                        height={200} 
                        alt="Igor" 
                        className='w-50 h-50 object-cover rounded-full imgIntegrantes' />
                        <div className="text-center mt-3">
                            <h1>Igor Neris Soares</h1>
                            <p>RM: 560088</p>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}
    