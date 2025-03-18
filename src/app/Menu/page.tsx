
import Image from 'next/image'
import Link from 'next/link'

export default function Menu () {
    return(
        <>
           



           <body >

                <header className="flex justify-center mb-8">
                    <Image src="/assets/logoCCR.png" alt="Logo" width={50} height={50}  />
                </header>
            
                <main>


                    <div className='flex flex-col items-center h-screen  bg-linear-to-r/oklab from-indigo-500 to-teal-400  font-inter '>

                        <div className='mb-8 mt-8 transform transition duration-300 ease-in-out hover:scale-110'>
                            <label  > 
                                <Link href="/BaterPonto" className='text-white text-2xl font-inter hover:text-gray-300 hover:scale-110 hover:text-3xl '>Registro de Jornada</Link>
                            </label>
                                
                        </div>

                        <div className='w-full border-b-2 border-black'></div>

                        <div className='mb-8 mt-8 transform transition duration-300 ease-in-out hover:scale-110'>
                            <label className='w-5' > 
                            <Link href="/Integrantes" className='text-white text-2xl font-inter hover:text-gray-300 hover:scale-110 hover:text-3xl '>Quem somos?</Link>
                            </label>
                        </div>

                        <div className='w-full border-b-2 border-black'></div>

                        <div className='mb-8 mt-8 transform transition duration-300 ease-in-out hover:scale-110'>
                            <label  > 
                            <Link href="/ChatCCO" className='text-white text-2xl font-inter hover:text-gray-300 hover:scale-110 hover:text-3xl  '>ChatCCO</Link>
                            </label>

                        </div>
                        <div className='w-full border-b-2 border-black'></div>




                        <div className='mb-8 mt-8 transform transition duration-300 ease-in-out hover:scale-110'>
                            <label  > 
                            <Link href="/Funcionalidades" className='text-white text-2xl font-inter hover:text-gray-300 hover:scale-110 hover:text-3xl  '>Funcionalidades</Link>
                            </label>

                        </div>





                        <div className='w-full border-b-2 border-black'></div>





                    </div>

                   


                </main>

           </body>
        
            
        </>
    )
}