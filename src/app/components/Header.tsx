import Link from 'next/link'; //Importando o Link do Next.js para conseguir  criar links entre as páginas
import React from 'react'; //Importando o React




function Header() {  //Criando um componente Header que será utilizado nas páginas de Layout
  return (
    <>
    <header className="bg-gray-800 text-white px-4 py-2 ">  {/*Criando um header com um fundo cinza escuro e texto branco para testar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <h3>MyLogo</h3>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <h3>Home</h3>
            </li>
            <li>
              <h3>About</h3>
            </li>
            <li>
              <h3>Contact</h3>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    </>
    );
}

export default Header;