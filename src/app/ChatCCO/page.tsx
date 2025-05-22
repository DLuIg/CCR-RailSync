'use client';
import React from "react";
import Header from "../components/Header/Header";
import ButtonMsg from "../components/ButtonMsg/ButtonMsg";

export default function ChatCCO() {
    return (
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
                            slug="PORTAS_COM_PROBLEMAS"
                        />
                        <ButtonMsg
                            text="Emergência Médica"
                            width="w-[150px]"
                            height="h-[60px]"
                            slug="EMERGENCIA_MEDICA"

                        />
                        <ButtonMsg
                            text="Falhas técnicas"
                            width="w-[150px]"
                            height="h-[60px]"
                            slug="FALHAS_TECNICAS"
                        />
                        <ButtonMsg
                            text="Problemas na via"
                            width="w-[150px]"
                            height="h-[60px]"
                            slug="PROBLEMAS_NA_VIA"
                        />
                        <ButtonMsg
                            text="Objeto/Pessoas na via"
                            width="w-[150px]"
                            height="h-[60px]"
                            slug="OBJETO_PESSOAS_NA_VIA"
                        />
                        <ButtonMsg
                            text="Anomalia nos freios"
                            width="w-[150px]"
                            height="h-[60px]"
                            slug="ANOMALIA_NOS_FREIOS"
                        />
                        <ButtonMsg
                            text="Falha na comunicação (Rádio)"
                            width="w-[150px]"
                            height="h-[80px]"
                            slug="FALHA_NA_COMUNICACAO_RADIOS"
                        />
                        <ButtonMsg
                            text="Alerta de segurança"
                            width="w-[150px]"
                            height="h-[60px]"
                            slug="ALERTA_DE_SEGURANCA"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}