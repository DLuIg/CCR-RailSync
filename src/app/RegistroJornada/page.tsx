import Header from "../components/Header/Header"
import Image from "next/image"

export default function RegistroJornada() {
    return (
        <>
            <main className="bg-gradient-to-r from-indigo-500 to-teal-400">
                <Header
                    leftLink="/BaterPonto"
                    rightLink="/Menu"
                    leftImageSrc="/assets/return.png"
                    rightImageSrc="/assets/menu.png"
                    altTextLeft="Voltar"
                    altTextRight="Menu"
                    title="Bater Ponto"
                />

                <div className="flex flex-col justify-center items-center p-5 h-screen gap-20 sm:gap-10">
                    <Image
                        src="/assets/Ellipse.png"
                        alt="Elipse"
                        width={300}
                        height={200}
                        className="hover:scale-110 transition duration-300 ease-in-out sm:w-64 sm:h-44"
                    />
                </div>
            </main>
        </>
    )
}