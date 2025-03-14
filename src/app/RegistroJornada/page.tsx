import Header from "../components/Header/Header"


export default function RegistroJornada(){
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
                title="Funcionalidades"
                /> 

                <div>



                </div>
            </main>

        </>
    )
}