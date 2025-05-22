'use client'; // Isso é importante para componentes que usam hooks no Next.js 13+

import React, { useEffect, useState } from 'react';
import Header from "../components/Header/Header";

// Definindo a interface para a estrutura de uma mensagem (ajuste conforme a sua API)
interface Message {
  id: string; 
  nome: string;
}

function Historico() {
  const [messages, setMessages] = useState<Message[]>([]); // Estado para armazenar as mensagens
  const [loading, setLoading] = useState<boolean>(true); // Estado para controlar o carregamento
  const [error, setError] = useState<string | null>(null); // Estado para erros

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('http://localhost:8080/ChatCCO/Historico', { 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-API-key': '1234', 
          },
        });

        if (!response.ok) {
          throw new Error(`Erro ao buscar histórico: ${response.status} ${response.statusText}`);
        }

        const data: Message[] = await response.json();
        setMessages(data);
      } catch (err) {
        console.error("Falha ao carregar histórico:", err);
        setError('Não foi possível carregar o histórico de mensagens.');
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    fetchMessages();
  }, []); 

  return (
    <>
      <main className="bg-linear-to-r/oklab from-indigo-500 to-teal-400 font-arial min-h-screen">
        <Header
          leftLink="/"
          rightLink="/Menu"
          leftImageSrc="/assets/return.png"
          rightImageSrc="/assets/menu.png"
          altTextLeft="Voltar"
          altTextRight="Menu"
          title="Histórico de Mensagens"
        />

        <section className="container mx-auto p-4">
          

          {loading && (
            <p className="text-white text-center">Carregando histórico...</p>
          )}

          {error && (
            <div className="bg-red-600 text-white p-3 rounded text-center">
              <p>{error}</p>
            </div>
          )}

          {!loading && messages.length === 0 && !error && (
            <p className="text-white text-center">Nenhuma mensagem no histórico ainda.</p>
          )}

          {!loading && messages.length > 0 && (
            <div className="bg-white rounded-lg shadow-xl p-6">
              <ul className="space-y-4">
                {messages.map((message) => {
                  // Função para substituir underscores por espaços
                  const formattedName = message.nome.replace(/_/g, ' '); 

                  return (
                    <li key={message.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <p className="text-gray-800 font-semibold text-lg">{formattedName}</p> {/* Usando a variável formatada */}
                      <p className="text-gray-600">ID: {message.id}</p>
                      {/* Você pode adicionar outras informações da mensagem aqui, se desejar */}
                      {/* Ex: <p className="text-gray-500 text-sm mt-1">Enviado em: {new Date(message.timestamp).toLocaleString()}</p> */}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Historico;