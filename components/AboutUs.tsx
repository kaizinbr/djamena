import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="py-24 col-span-full flex justify-center items-center bg-[#C5DDFF] text-[#001B41]">
            <div
                className={`
                    h-full z-10 px-4 relative
                    grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8  
                    lg:max-w-screen-lg
                `}
            >
                <h1 className="text-4xl text-center font-bold mb-4 order-1 md:col-span-1 md:col-start-2">
                    Quem Somos
                </h1>
                <p className="text-base text-center mb-8 montserrat-normal order-2 md:col-span-1 md:col-start-2">
                    Somos uma agência de viagens especializada em proporcionar
                    experiências incríveis. Com uma equipe apaixonada por
                    viagens, estamos prontos para tornar sua viagem
                    inesquecível.
                </p>
                <p className="text-base text-center mb-8 montserrat-normal order-3 md:col-span-1 md:col-start-2">
                    Com anos de experiência no mercado de viagens, a Djamena se
                    dedica a transformar suas férias em momentos inesquecíveis.
                    Oferecemos um atendimento personalizado e suporte completo
                    em todas as etapas da sua viagem, do planejamento ao
                    check-in, para que você possa relaxar e aproveitar cada
                    momento!
                </p>
                <picture
                    className={`
                        w-full
                        order-4 md:order-last md:row-start-1 md:col-start-1 md:row-span-3 m-auto
                        flex justify-start items-center md:h-full
                    `}
                >
                    <Image
                        src="/logo-djamena.jpg"
                        alt="Logo da Djamena Agency"
                        width={400}
                        height={400}
                        className="m-auto"
                    />
                </picture>
            </div>
        </div>
    );
}
