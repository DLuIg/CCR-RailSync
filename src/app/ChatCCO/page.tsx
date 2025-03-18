import React from "react"
import Header from "../components/Header/Header"
import ButtonMsg from "../components/ButtonMsg/ButtonMsg"

export default function ChatCCO() {
    return(
        <>
            <main>
                <Header 
                    leftLink="/Funcionalidades"
                    rightLink="/Menu"
                    leftImageSrc="/assets/return.png"
                    rightImageSrc="/assets/menu.png"
                    altTextLeft="Voltar"
                    altTextRight="Menu"
                    title="Chat CCO"
                /> 

                <div className="flex flex-col justify-center items-center p-5 h-screen bg-gradient-to-r from-indigo-500 to-teal-400 gap-15">
                    <div className="grid grid-cols-2 gap-15">
                        <ButtonMsg
                            text="Portas com problemas"
                            width="w-[150px]"
                            height="h-[60px]"
                            modalMessage="portas com problemas"
                        />
                        <ButtonMsg
                            text="Emergência Médica"
                            width="w-[150px]"
                            height="h-[60px]"
                            modalMessage="emergência Médica"
                        />
                        <ButtonMsg
                            text="Falhas técnicas"
                            width="w-[150px]"
                            height="h-[60px]"
                            modalMessage="falhas técnicas"
                        />
                        <ButtonMsg
                            text="Problemas na via"
                            width="w-[150px]"
                            height="h-[60px]"
                            modalMessage="problemas na via"
                        />
                        <ButtonMsg
                            text="Objeto/Pessoas na via"
                            width="w-[150px]"
                            height="h-[60px]"
                            modalMessage="objeto/pessoas na via"
                        />
                        <ButtonMsg
                            text="Anomalia nos freios"
                            width="w-[150px]"
                            height="h-[60px]"
                            modalMessage="anomalia nos freios"
                        />
                        <ButtonMsg
                            text="Falha na comunicação (Rádio)"
                            width="w-[150px]"
                            height="h-[80px]"
                            modalMessage="falha na comunicação (Rádio)"
                        />

                        <ButtonMsg
                            text="Alerta de segurança"
                            width="w-[150px]"
                            height="h-[60px]"
                            modalMessage="alerta de segurança"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}