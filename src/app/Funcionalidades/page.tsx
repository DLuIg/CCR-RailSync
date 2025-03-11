import exp from "constants"
import Header from "../components/Header"




 function Funcionalidades() {
    return(
        <>
            <Header  // PASSANDO VALORES PARA MEUS PROPS DO COMPONENTE HEADER
                leftLink="/"  // Retornar para a página inicial (apenas colocar uma BARRA)
                rightLink="/menu/page.tsx"
                leftImageSrc="/assets/return.png"
                rightImageSrc="/assets/menu.png"
                altTextLeft="Voltar"
                altTextRight="Menu"
                title="Funcionalidades"
            /> 
            
            
            
            

        </>
    )
};

export default Funcionalidades;