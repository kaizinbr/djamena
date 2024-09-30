import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="py-24 col-span-full flex justify-center w-full items-center bg-[#FEAE01] text-white" >
            <div
                className={`
                    h-full z-10 px-4 relative
                    flex flex-col gap-x-4 md:gap-x-8  
                    lg:max-w-lg w-full
                `}
            >
                <div
                    className={`
                            text-base text-center col-span-6 montserrat-normal order-3 md:col-span-6 md:col-start-7
                            flex flex-col items-center justify-center
                        `}
                >
                    <h1 className="text-4xl text-center col-span-6 font-bold mb-4 underline underline-offset-8">
                        Sobre nós
                    </h1>
                    <p className="text-base text-center col-span-6 mb-8 montserrat-normal">
                        Somos uma agência de viagens especializada em
                        proporcionar experiências incríveis. Com uma equipe
                        apaixonada por viagens, estamos prontos para tornar sua
                        viagem inesquecível.
                    </p>
                    {/* <p className="text-base text-center col-span-6 md:mb-0 mb-8 montserrat-normal">
                        Com anos de experiência no mercado de viagens, a Djamena se
                        dedica a transformar suas férias em momentos inesquecíveis.
                        Oferecemos um atendimento personalizado e suporte completo
                        em todas as etapas da sua viagem, do planejamento ao
                        check-in, para que você possa relaxar e aproveitar cada
                        momento!
                    </p> */}
                    <button
                        className={`
                            bg-[#1C3A60]
                            rounded-lg p-[3px]
                            w-full text-neutral-100
                            flex items-center justify-center
                            
                        `}
                        // animate={{ scale: 1 }}
                        // whileTap={{ scale: 0.9 }}
                        // href="/orcamento"
                    >
                        <p className="font-bold text-lg px-4 py-3 rounded-md">
                            Saiba mais
                        </p>
                    </button>
                </div>
                {/* <picture
                    className={`
                        w-full
                        order-4 md:order-last col-span-6 md:col-start-1 md:row-start-1 m-auto
                        flex justify-start items-center md:h-full
                    `}
                >
                    <Image
                        src="/DJAMENA-LOGOV1.webp"
                        alt="Logo da Djamena Viagens"
                        width={400}
                        height={400}
                        className="m-auto rounded-lg"
                    />
                </picture> */}
            </div>
        </div>
    );
}
