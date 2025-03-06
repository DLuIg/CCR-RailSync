import Image from "next/image";


import logoPath from '../../assets/logosemBackground.png';// Caminho para o logo


export default function Home() {
  return (
    <>
      <h1>Teste</h1>
      <Image src= "/logosemBackground.png" alt="RailSync Logo" width={100} height={100} />
      
    </>
  );
}
