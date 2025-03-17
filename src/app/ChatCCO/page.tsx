import React from "react"
import Header from "../components/Header/Header"
import ButtonMsg from "../components/ButtonMsg/ButtonMsg"

export default function ChatCCO(){
    return(
        <>
            <main>
                <Header  // PASSANDO VALORES PARA MEUS PROPS DO COMPONENTE HEADER
                leftLink="/Funcionalidades"  // Retornar para a página inicial (apenas colocar uma BARRA)
                rightLink="/Menu"
                leftImageSrc="/assets/return.png"
                rightImageSrc="/assets/menu.png"
                altTextLeft="Voltar"
                altTextRight="Menu"
                title="Chat CCO"
                /> 

                <div className="flex flex-col justify-center items-center p-5 h-screen font-thin bg-linear-to-r/oklab from-indigo-500 to-teal-400 gap-20">
                   
                    <ButtonMsg
                    text="Iniciar"
                    width="w-[350px]"
                    height="h-[50px]"
                    modalMessage="/ChatCCO"
                    />

                   


                </div>
            </main>

        </>
    )
}