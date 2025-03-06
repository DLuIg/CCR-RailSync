import Image from "next/image";


import logoPath from '../assets/logosemBackground.png'; // Caminho para o logo


export default function Home() {
  return (
    <>
      <h1>Teste</h1>
      <Image src= {logoPath} alt="RailSync Logo" width={72} height={16} />
      
    </>
  );
}
