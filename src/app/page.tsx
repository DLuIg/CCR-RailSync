"use client";

import Image from "next/image"; // Import do Image do Next.js para que eu possa usar a imagem do logo
import { useRouter } from 'next/navigation'; // Import do HOOK useNavigation para que eu possa usar o button para direcionar a outra página (funcionalidades)





export default function Home() {
  const router = useRouter(); //Hook que permite a navegação entre páginas
  
  const NavegarButton = () => {
    router.push("/Funcionalidades"); //Função que direciona para a página de funcionalidades
  };
  
  
  return (
    <>
      {/*Formatação QUASE igual mantida do CSS antigo! */}
      {/*Alterar button para novo componente */}
      {/*Alterar fonte para Arial (dúvida) */}

      

      <div className="flex flex-col items-center h-screen font-sans bg-gradient-to-b from-white to-blue-300 font-arial " > 
         {/*Utilizei um FADE de branco para azul trazendo um aspecto mais clean*/}
        <header className="flex justify-center">
          <Image
            src="/assets/logosemBackground.png"
            alt="RailSync Logo"
            width={350}
            height={80}
            className="w-[350px]"
          />
        </header>

        <main className="max-w-[430px] p-5"> {/* Main possui max de tamanho em 430px e um padding 5  */}
          <section className="p-5 rounded-xl">
            <form className="flex flex-col">
              <label htmlFor="email" className="text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                className="p-2 my-1 border border-gray-500 rounded-lg h-[50px]"
              />

              <label htmlFor="password" className="mt-4 text-gray-700">Senha</label>
              <input
                type="password"
                placeholder="Senha"
                required
                className="p-2 my-1 border border-gray-500 rounded-lg h-[50px]"
              />


              <a href="">Esqueci a senha...</a>
              <button /* Será substituido pelo componente BUTTON que faremos a seguir*/
                onClick={NavegarButton}  
                type="button"
                className="p-2 mt-4 font-bold text-white bg-blue-600 rounded-md cursor-pointer w-[350px]  "
              >
                LOGIN 
              </button>
            </form>
          </section>
        </main>

      <footer className="mt-5 text-center text-black text-sm">
        <p>&copy; 2025 RailSync. Todos os direitos reservados.</p>
      </footer>
    </div>
    </>
  );
}
