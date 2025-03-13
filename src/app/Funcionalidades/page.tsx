
import ButtonAcessar from "../components/ButtonAcessar/ButtonAcessar"
import Header from "../components/Header/Header"



 function Funcionalidades() {
    return(
        <>


        <main className="bg-gradient-to-b from-white to-blue-300 font-arial">






            <Header  // PASSANDO VALORES PARA MEUS PROPS DO COMPONENTE HEADER
                leftLink="/"  // Retornar para a página inicial (apenas colocar uma BARRA)
                rightLink="/Menu"
                leftImageSrc="/assets/return.png"
                rightImageSrc="/assets/menu.png"
                altTextLeft="Voltar"
                altTextRight="Menu"
                title="Funcionalidades"
               
            /> 
            
            
            <div className="flex flex-col justify-center items-center p-5 h-screen font-thin gap-20">
                

            
                <ButtonAcessar
                    cor="bg-blue-600"
                    texto="Chat CCO"
                    width="w-[350px]"
                    height="h-[50px]"
                    link="/ChatCCO"   
                 />
               
                <ButtonAcessar
                    cor="bg-blue-600"
                    texto="Jornada"
                    width="w-[350px]"
                    height="h-[50px]"
                    link="/BaterPonto"
                
                />     

                <ButtonAcessar
                    cor="bg-blue-600"
                    texto="Integrantes"
                    width="w-[350px]"
                    height="h-[50px]"
                    link="/Integrantes"
                
                />              


            </div>
        </main>
            
            
            

        </>
    )
};

export default Funcionalidades;