import Image from "next/image";
import Btn from "./CTA/Btn";

function Dobra1() {
    return (
        <div className="py-24 relative col-span-full flex justify-center items-center">
            <div
                className={`
                h-full pt-24 z-10 px-4 relative
                grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8
                lg:max-w-screen-lg
            `}
            >
                <h1 className="text-4xl font-bold mb-8 order-1 md:col-span-1 md:col-start-1">
                    Por que Escolher a{" "}
                    <span className="bg-[#39B5FF] px-1 rounded-md text-stone-100">
                        Djamena
                    </span>
                    ?
                </h1>

                <p className="text-base text-start mb-4 montserrat-normal order-2 md:col-span-1 md:col-start-1">
                    Na Djamena, nós entendemos que cada viagem é única e merece
                    ser inesquecível. É por isso que nos dedicamos a oferecer
                    uma experiência diferenciada, desde o primeiro contato até o
                    seu retorno para casa.
                </p>
                <picture
                    className={`
                    w-full
                    mb-8 md:mb-0
                    order-3 md:order-last md:row-start-1 md:col-start-2 md:row-span-3 m-auto
                    flex justify-start items-center md:h-full
                `}
                >
                    <Image
                        src="/img1.jpg"
                        alt="Família de três pessoas. O pai carrega a filha nas costas e todos sorriem felizes e tranquilos em uma praia"
                        className={`
                            w-full rounded-lg shadow-lg
                        `}
                        width={400}
                        height={400}
                    />
                </picture>

                <div className="w-full order-4 md:order-3 md:col-span-1 md:col-start-1">
                    <Btn />
                </div>
            </div>
        </div>
    );
}

function Dobra3() {
    return (
        <div
            className={`py-20 w-full bg-[#1C3A60] col-span-full flex justify-center items-center`}
        >
            <div
                className={`
                    
                    text-neutral-100
                    h-full z-10 px-4 relative
                    grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8
                    lg:max-w-screen-lg 
                `}
            >
                <picture
                    className={`
                    w-full
                    mb-8 md:mb-0
                    order-1 md:order-last md:row-start-1 md:col-start-2 md:row-span-3 m-auto
                    flex justify-start items-center md:h-full
                `}
                >
                    <Image
                        src="/pexels-cottonbro-3206081.jpg"
                        alt="Homem segurando seu telefone e sorrindo"
                        className="w-full  rounded-lg shadow-lg"
                        width={400}
                        height={400}
                    />
                </picture>
                <div className="flex flex-col md:row-span-3 items-center justify-center order-1 md:col-span-1 md:col-start-1">
                    <h1
                        className={`text-4xl font-bold mb-8 order-2 md:col-span-1 md:col-start-1 w-full`}
                    >
                        Assistência completa
                    </h1>

                    <p className="text-base text-start montserrat-normal mb-6 order-3 md:col-span-1 md:col-start-1">
                        Viajar pode ser uma experiência desafiadora, mas com a
                        Djamena, você nunca estará sozinho. Nossa equipe
                        especializada está disponível para fornecer suporte
                        completo em todas as etapas da sua jornada.
                    </p>

                    <p className="text-base text-start montserrat-normal order-4 md:col-span-1 md:col-start-1">
                        Desde o planejamento inicial até o check-out, estamos
                        aqui para garantir que tudo ocorra sem problemas. Se
                        surgir qualquer imprevisto, você pode contar conosco
                        para ajudar a resolver rapidamente.
                    </p>
                </div>
            </div>
        </div>
    );
}

function Dobra2() {
    return (
        <div className="py-24 relative col-span-full  flex justify-center items-center">
            <div
                className={`
                h-full pt-24 z-10 px-4 relative
                grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8
                lg:max-w-screen-lg
            `}
            >
                <picture
                    className={`
                    w-full
                    mb-8 md:mb-0
                    order-3 md:order-last md:row-start-1 md:col-start-2 md:row-span-3 m-auto
                    flex justify-start items-center md:h-full
                `}
                >
                    <Image
                        src="/pexels-julieaagaard-20969831.jpg"
                        alt="Vista de hotel de luxo com piscina rodeada por cadeiras de banho e uma área verde bela e agrádavel"
                        className="w-full rounded-lg shadow-lg mb-8"
                        width={400}
                        height={400}
                    />
                </picture>
                <div className="flex flex-col md:row-span-3 items-center justify-center order-1 md:col-span-1 md:col-start-1">
                    <h1 className="text-4xl font-bold mb-8">
                        Conheça destinos paradisíacos!
                    </h1>
                    <p className="text-base text-start mb-4 montserrat-normal order-2 md:col-span-1 md:col-start-1">
                        Na Djamena, levamos você a descobrir os destinos mais
                        deslumbrantes e paradisíacos do mundo. Se você sempre
                        sonhou em visitar praias de areias brancas, ilhas
                        exóticas e paisagens de tirar o fôlego, nós temos o
                        pacote ideal para você.
                    </p>
                </div>
            </div>
        </div>
    );
}

function Dobra4() {
    return (
        <div className="py-24 relative col-span-full flex justify-center items-center">
            <div
                className={`
                h-full pt-24 z-10 px-4 relative
                grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8
                lg:max-w-screen-lg
            `}
            >
                <picture
                    className={`
                    w-full
                    mb-8 md:mb-0
                    order-3 md:order-last md:row-start-1 md:col-start-2 md:row-span-3 m-auto
                    flex justify-start items-center md:h-full
                `}
                >
                    <Image
                        src="/lastimg.jpg"
                        alt="Praia do Recife - PE, com vários banhistas se banhando e aproveitando o sol e o mar azul"
                        width={500}
                        height={500}
                        className={`
                            w-full  rounded-lg shadow-lg mb-8
                        `}
                    />
                </picture>
                <div className="flex flex-col md:row-span-3 items-center justify-center order-1 md:col-span-1 md:col-start-1">
                    <h1 className={`text-4xl font-bold mb-8 w-full`}>
                        Hora de decidir seu
                        <br />
                        <span
                            className={`bg-[#39B5FF] px-1 rounded-md text-stone-100`}
                        >
                            destino
                        </span>
                        !
                    </h1>
                    <p className="text-base text-start mb-4 montserrat-normal">
                        Escolher a Djamena é escolher um parceiro dedicado a
                        transformar sua viagem dos sonhos em realidade.
                        Deixe-nos cuidar de todos os detalhes para que você
                        possa se concentrar no que realmente importa: criar
                        memórias inesquecíveis e aproveitar cada momento da sua
                        viagem!
                    </p>
                    <Btn className="mb-4" />
                </div>
            </div>
        </div>
    );
}

function Dobra5() {
    return (
        <div className="py-24 relative col-span-full flex justify-center items-center">
            <div
                className={`
                h-full z-10 px-4 relative
                grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8
                lg:max-w-screen-lg
            `}
            >
                <div className="flex flex-col md:row-span-3 items-center justify-center order-1 md:col-span-1 md:col-start-2">
                    <div className="text-4xl text-center font-bold mb-8 w-full flex flex-col justify-center items-center">
                        <span className="bg-[#39B5FF] px-2 rounded-md text-neutral-100 reltive z-20">
                            As menores taxas
                        </span>
                        <span className="bg-[#39B5FF] px-2 rounded-md text-neutral-100 -mt-2 pt-2 relative z-10">
                            do mercado
                        </span>
                    </div>
                    <p className="text-base mb-4 montserrat-normal order-3 md:col-span-1 md:col-start-2">
                        Na Djamena, sabemos que uma viagem inesquecível não
                        precisa custar uma fortuna. É por isso que nos dedicamos
                        a oferecer as menores taxas do mercado, sem comprometer
                        a qualidade e o conforto. Deixe a Djamena transformar
                        seus sonhos em realidade com ótimas ofertas e um serviço
                        de excelência.
                    </p>
                </div>
                <picture
                    className={`
                        w-full
                        mb-8 md:mb-0
                        order-4 md:order-last md:row-start-1 md:col-start-1 md:row-span-3 m-auto
                        flex justify-start items-center md:h-full
                    `}
                >
                    <Image
                        src="/pexels-leah-newhouse-50725-618902.jpg"
                        alt="Topo de castelo em parque da Disney envolto pelo céu azul"
                        className="min-w-96 w-full rounded-lg shadow-lg mb-8 md:mb-0"
                        width={400}
                        height={400}
                    />
                </picture>
            </div>
        </div>
    );
}

function Dobra6() {
    return (
        <div className="py-24 relative col-span-full">
            <div className="flex flex-col items-start justify-start h-full pt-24 z-10 px-4 relative">
                <h1 className="text-4xl font-bold mb-8">
                    Quem viaja sozinho gasta cerca de{" "}
                    <span className="bg-[#39B5FF] px-1 rounded-md text-stone-100">
                        270%
                    </span>{" "}
                    a mais.
                </h1>

                <p className="text-base text-start mb-4 montserrat-normal">
                    Algumas compainhas aéreas cobram taxas adicionais para quem
                    viaja sozinho. Com a gente, você não paga nada a mais por
                    isso.
                </p>
                <Image
                    src="/img1.jpg"
                    alt="Família de três pessoas. O pai carrega a filha nas costas e todos sorriem felizes e tranquilos em uma praia"
                    className="min-w-96 w-full rounded-lg shadow-lg mb-8"
                    width={400}
                    height={400}
                />
                <Btn />
            </div>
        </div>
    );
}

export { Dobra1, Dobra2, Dobra3, Dobra4, Dobra5, Dobra6 };
