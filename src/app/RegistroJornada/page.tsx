import Header from "../components/Header/Header"
import Image from "next/image"

export default function RegistroJornada(){
    return(
        <>
            <main className="bg-gradient-to-r from-indigo-500 to-teal-400" >
                <Header  // PASSANDO VALORES PARA MEUS PROPS DO COMPONENTE HEADER
                leftLink="/BaterPonto"  // Retornar para a página inicial (apenas colocar uma BARRA)
                rightLink="/Menu"
                leftImageSrc="/assets/return.png"
                rightImageSrc="/assets/menu.png"
                altTextLeft="Voltar"
                altTextRight="Menu"
                title="Bater Ponto"
                /> 

                

                    

                <div className="flex flex-col justify-center items-center p-5 h-screen gap-20">

                    <Image 
                        src="/assets/Ellipse.png"
                        alt="Elipse"
                        width={300}
                        height={200}
                        className="hover:scale-110 transition duration-300 ease-in-out"> 
                    
                        
                    </Image>
                    
                    
                </div>
            </main>

        </>
    )
}