import React from 'react';
import Header from '../components/Header/Header';

import ButtonAcessar from '../components/ButtonAcessar/ButtonAcessar';





export default function BaterPonto(){

    return(
        <>
            <Header
            leftLink="/Funcionalidades"  // Retornar para a página inicial (apenas colocar uma BARRA)
            rightLink="/Menu"
            leftImageSrc="/assets/return.png"
            rightImageSrc="/assets/menu.png"
            altTextLeft="Voltar"
            altTextRight="Menu"
            title="Registro Jornada "
            
            />

            <div className='flex flex-col justify-center items-center p-5 h-screen font-thin bg-linear-to-r/oklab from-indigo-500 to-teal-400 gap-20'>

            <ButtonAcessar
            cor="bg-green-600"
            texto="Iniciar"
            width="w-[200px]"
            height="h-[50px]"
            link="/RegistroJornada" 
            />


            <ButtonAcessar
            cor="bg-red-600"
            texto='Encerrar'
            width="w-[200px]"
            height="h-[50px]"
            link="/Funcionalidades"
            
            
            />

            </div>
            
            
        
        </>
    )
}