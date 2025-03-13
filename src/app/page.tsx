"use client";

import React, { useState } from "react";
import Image from "next/image"; // Import do Image do Next.js para que eu possa usar a imagem do logo
import ButtonAcessar from "./components/ButtonAcessar/ButtonAcessar";

export default function Home() {
  // Estado para guardar e exibir mensagens de erro
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Função de validação de email utilizando Regex.
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Exemplo de como usar a função de validação
  const handleEmailValidation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const emailInput = document.querySelector<HTMLInputElement>('input[type="email"]');
    const email = emailInput?.value ?? "";

    if (validateEmail(email)) {
      setErrorMessage(""); // Limpa a mensagem de erro se o email for válido
    } else {
      setErrorMessage("Por favor, insira um email válido com '@' e '.com'.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen font-sans bg-gradient-to-b from-white to-blue-300 font-arial "> 
         <header className="flex justify-center">
          <Image
            src="/assets/logosemBackground.png"
            alt="RailSync Logo"
            width={350}
            height={80}
            className="w-[350px]"
          />
        </header>

        <main className="max-w-[430px] p-5">
          <section className="p-5 rounded-xl">
            <form className="flex flex-col" onSubmit={handleEmailValidation}>
              <label htmlFor="email" className="text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                className="p-2 my-1 border border-gray-500 rounded-lg h-[50px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              />
              
              {/* Exibe a mensagem de erro, se existir */}
              {errorMessage && (
                <span className="text-red-500 mt-2">{errorMessage}</span>
              )}

              <label htmlFor="password" className="mt-4 text-gray-700">Senha</label>
              <input
                type="password"
                placeholder="Senha"
                required
                className="p-2 my-1 border border-gray-500 rounded-lg h-[50px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              />

              <div className="gap-4 mt-8">
                <ButtonAcessar
                  cor="bg-blue-600"
                  texto="Login"
                  width="w-[350px]" 
                  height="h-[50px]"
                  link="/Funcionalidades"
                />
              </div>
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