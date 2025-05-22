"use client";

import React, { useState } from "react";
import Image from "next/image";
import ButtonAcessar from "./components/ButtonAcessar/ButtonAcessar";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [mensagemErro, setMensagemErro] = useState<string>("");

  
  const validarEmail = (email: string): boolean => {
    return email.includes("@") && email.includes(".com");
  };

  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarEmail(email)) {
      setMensagemErro("Inclua @ e .com no seu email");
      return;
    }
    setMensagemErro("");

    if (email === "maquinista@fiap.com.br" && senha === "123") {
      window.location.href = "/Funcionalidades";
    } else {
      setMensagemErro("Credenciais inválidas");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen font-sans bg-gradient-to-b from-white to-blue-300 font-arial">
        <header className="flex justify-center">
          <Image
            src="/assets/logosemBackground.png"
            alt="RailSync Logo"
            width={350}
            height={80}
            className="w-[250px] sm:w-[350px]" 
          />
        </header>

        <main className="max-w-[100%] p-5 flex flex-col">
          <section className="p-5 rounded-xl">
            <form className="flex flex-col" onSubmit={handleLogin}>
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="p-2 my-1 border border-gray-500 rounded-lg h-[50px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              />

              {mensagemErro && (
                <span className="text-red-500">{mensagemErro}</span>
              )}

              <label htmlFor="password" className="mt-4 text-gray-700">
                Senha
              </label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha"
                required
                className="p-2 my-1 border border-gray-500 rounded-lg h-[50px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
              />

              <div className="gap-4 mt-8">
                <ButtonAcessar
                  cor="bg-blue-600"
                  texto="Login"
                  width="w-[300px] sm:w-[350px]" // Ajustando para manter a responsividade
                  height="h-[50px]"
                />
              </div>
            </form>
          </section>
        </main>

        <footer className="mt-5 text-center text-black text-sm ">
          <p>&copy; 2025 RailSync. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}