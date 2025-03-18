import Image from 'next/image'
import Link from 'next/link'

export default function Menu () {
    return(
        <>
            <head>
                <title>Menu</title>
            </head>

            <body>
                <header className="flex justify-center mb-8 py-4 bg-white shadow-md">
                    <Image src="/assets/logoCCR.png" alt="Logo" width={50} height={50} className="w-12 sm:w-16 lg:w-20" />
                </header>

                <main>
                    <div className='flex flex-col items-center h-screen bg-linear-to-r/oklab from-indigo-500 to-teal-400 font-inter'>

                        <div className='mb-8 mt-8 transform transition duration-300 ease-in-out hover:scale-110'>
                            <label>
                                <Link href="/BaterPonto" className='text-white text-xl sm:text-2xl lg:text-3xl font-inter hover:text-gray-300'>
                                    Registro de Jornada
                                </Link>
                            </label>
                        </div>

                        <div className='w-full border-b-2 border-black'></div>

                        <div className='mb-8 mt-8 transform transition duration-300 ease-in-out hover:scale-110'>
                            <label>
                                <Link href="/Integrantes" className='text-white text-xl sm:text-2xl lg:text-3xl font-inter hover:text-gray-300'>
                                    Quem somos?
                                </Link>
                            </label>
                        </div>

                        <div className='w-full border-b-2 border-black'></div>

                        <div className='mb-8 mt-8 transform transition duration-300 ease-in-out hover:scale-110'>
                            <label>
                                <Link href="/ChatCCO" className='text-white text-xl sm:text-2xl lg:text-3xl font-inter hover:text-gray-300'>
                                    ChatCCO
                                </Link>
                            </label>
                        </div>

                        <div className='w-full border-b-2 border-black'></div>

                        <div className='mb-8 mt-8 transform transition duration-300 ease-in-out hover:scale-110'>
                            <label>
                                <Link href="/Funcionalidades" className='text-white text-xl sm:text-2xl lg:text-3xl font-inter hover:text-gray-300'>
                                    Funcionalidades
                                </Link>
                            </label>
                        </div>

                        <div className='w-full border-b-2 border-black'></div>

                    </div>
                </main>
            </body>
        </>
    )
}