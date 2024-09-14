import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="py-24 col-span-full flex justify-center items-center bg-[#C5DDFF] text-[#001B41]">
            <div
                className={`
                    h-full z-10 px-4 relative
                    grid grid-cols-6 md:grid-cols-12 gap-x-4 md:gap-x-8  
                    lg:max-w-screen-lg lg:px-0 w-full
                `}
            >
                <div
                    className={`
                            text-base text-center col-span-6 montserrat-normal order-3 md:col-span-6 md:col-start-7
                            flex flex-col items-center justify-center
                        `}
                >
                    <h1 className="text-4xl text-center col-span-6 font-bold mb-4">
                        Quem Somos
                    </h1>
                    <p className="text-base text-center col-span-6 mb-8 montserrat-normal">
                        Somos uma agência de viagens especializada em proporcionar
                        experiências incríveis. Com uma equipe apaixonada por
                        viagens, estamos prontos para tornar sua viagem
                        inesquecível.
                    </p>
                    <p className="text-base text-center col-span-6 md:mb-0 mb-8 montserrat-normal">
                        Com anos de experiência no mercado de viagens, a Djamena se
                        dedica a transformar suas férias em momentos inesquecíveis.
                        Oferecemos um atendimento personalizado e suporte completo
                        em todas as etapas da sua viagem, do planejamento ao
                        check-in, para que você possa relaxar e aproveitar cada
                        momento!
                    </p>
                </div>
                <picture
                    className={`
                        w-full
                        order-4 md:order-last col-span-6 md:col-start-1 md:row-start-1 m-auto
                        flex justify-start items-center md:h-full
                    `}
                >
                    <Image
                        src="/djamena-logo1.png"
                        alt="Logo da Djamena Agency"
                        width={400}
                        height={400}
                        className="m-auto rounded-lg"
                    />
                </picture>
            </div>
        </div>
    );
}
