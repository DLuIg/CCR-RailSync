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

            <div className='flex flex-col justify-center items-center p-5 h-screen font-thin bg-gradient-to-b from-white to-blue-300 gap-20'>

            <ButtonAcessar
            cor="bg-green-600"
            texto="Iniciar"
            width="w-[350px]"
            height="h-[50px]"
            link="/ChatCCO" 
            />


            <ButtonAcessar
            cor="bg-red-600"
            texto='Encerrar'
            width="w-[350px]"
            height="h-[50px]"
            link="/BaterPonto"
            
            
            />

            </div>
            
            
        
        </>
    )
}