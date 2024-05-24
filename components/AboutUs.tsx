import Image from "next/image"

export default function AboutUs() {


    return (
        <div className="py-24">
            {/* <div className={`
                absolute z-0 left-16
                -translate-y-1/2 
                bg-amber-300 h-[500px] w-32 rotate-45 md:size-[650px] blur-[100px] mix-blend
            `}></div> */}
            <div className="flex flex-col items-center justify-center h-full px-4 relative z-10">
                <h1 className="text-4xl font-bold mb-4">Quem Somos</h1>
                <p className="text-base text-center mb-8 montserrat-normal">
                    Somos uma agência de viagens especializada em proporcionar experiências incríveis.
                    Com uma equipe apaixonada por viagens, estamos prontos para tornar sua viagem inesquecível.
                </p>
                {/* <Image src="/images/about-us.jpg" alt="Sobre Nós" className="w-96 rounded-lg shadow-lg mb-8" width={100} /> */}
                <p className="text-base text-center mb-8 montserrat-normal">
                    Nossa missão é proporcionar experiências incríveis para nossos clientes, garantindo que cada viagem seja única e inesquecível.
                </p>

                <div className="bg-sky-600 rounded-lg w-full h-64 flex">
                    <p className="m-auto">foto da equipe ou outra coisa</p>
                </div>
            </div>
        </div>
    )
}