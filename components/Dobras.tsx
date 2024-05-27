import Image from "next/image";
import Btn from "./CTA/Btn";
import { BadgePercent, Hotel } from "lucide-react";

function Dobra1() {
    return (
        <div className="py-24 relative">
            {/* <div className={`
                absolute z-0 -left-32
                -translate-y-1/2 rounded-full
                bg-sky-600/60 h-[500px] w-48 -rotate-45 md:size-[650px] blur-[100px] mix-blend
            `}></div> */}
            <div className="flex flex-col items-start justify-start h-full pt-24 z-10 px-4 relative">
                <h1 className="text-4xl font-bold mb-8">
                    Por que Escolher a{" "}
                    <span className="bg-[#39B5FF] px-1 rounded-md text-stone-100">
                        Djamena
                    </span>
                    ?
                </h1>

                <p className="text-base text-start mb-4 montserrat-normal">
                    Na Djamena, nós entendemos que cada viagem é única e merece
                    ser inesquecível. É por isso que nos dedicamos a oferecer
                    uma experiência diferenciada, desde o primeiro contato até o
                    seu retorno para casa.
                </p>
                <Image
                    src="/img1.jpg"
                    alt="Sobre Nós"
                    className="w-96 rounded-lg shadow-lg mb-8"
                    width={400}
                    height={400}
                />

                <Btn />
            </div>
        </div>
    );
}

function Dobra3() {
    return (
        <div className={`py-20 w-full bg-[#1C3A60]`}>
            <div
                className={`
                    flex flex-col gap-4 items-start justify-start h-full px-4 relative z-10
                    text-neutral-100
                `}
            >
                <Image
                    src="/pexels-cottonbro-3206081.jpg"
                    alt="Sobre Nós"
                    className="w-96  rounded-lg shadow-lg"
                    width={400}
                    height={400}
                />
                <h1 className={`text-4xl font-bold mb-3`}>
                    Assistência completa
                </h1>

                <p className="text-base text-start montserrat-normal">
                    Viajar pode ser uma experiência desafiadora, mas com a
                    Djamena, você nunca estará sozinho. Nossa equipe
                    especializada está disponível para fornecer suporte completo
                    em todas as etapas da sua jornada.
                </p>

                <p className="text-base text-start montserrat-normal">
                    Desde o planejamento inicial até o check-out, estamos aqui
                    para garantir que tudo ocorra sem problemas. Se surgir
                    qualquer imprevisto, você pode contar conosco para ajudar a
                    resolver rapidamente.
                </p>
            </div>
        </div>
    );
}

function Dobra2() {
    return (
        <div className="py-24 relative">
            <div className="flex flex-col items-start justify-start h-full  z-10 px-4 relative">
                <Image
                    src="/pexels-julieaagaard-20969831.jpg"
                    alt="Sobre Nós"
                    className="w-96  rounded-lg shadow-lg mb-8"
                    width={400}
                    height={400}
                />

                <h1 className="text-4xl font-bold mb-8">
                    Conheça destinos paradisíacos!
                </h1>

                <p className="text-base text-start mb-4 montserrat-normal">
                    Na Djamena, levamos você a descobrir os destinos mais
                    deslumbrantes e paradisíacos do mundo. Se você sempre sonhou
                    em visitar praias de areias brancas, ilhas exóticas e
                    paisagens de tirar o fôlego, nós temos o pacote ideal para
                    você.
                </p>
                {/* <h1 className="text-4xl font-bold mb-4">Curta mais gastando menos conosco!</h1> */}
                {/* <Btn /> */}
            </div>
        </div>
    );
}

function Dobra4() {
    return (
        <div className="py-24 relative">
            <div className="flex flex-col items-start justify-start h-full z-10 px-4 relative">
                <Image
                    src="/lastimg.jpg"
                    alt="aaa"
                    width={500}
                    height={500}
                    className={`
                    w-96  rounded-lg shadow-lg mb-8
                `}
                />
                <h1 className={`text-4xl font-bold mb-8`}>
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
                    transformar sua viagem dos sonhos em realidade. Deixe-nos
                    cuidar de todos os detalhes para que você possa se
                    concentrar no que realmente importa: criar memórias
                    inesquecíveis e aproveitar cada momento da sua viagem!
                </p>
                <Btn />
                {/* <div className="mt-6 w-full h-80 rounded bg-stone-800 border border-amber-700"></div> */}
            </div>
        </div>
    );
}

function Dobra5() {
    return (
        <div className="py-24 relative">
            <div className="flex flex-col items-start justify-start h-full pt-24 z-10 px-4 relative">
                <Image
                    src="/pexels-leah-newhouse-50725-618902.jpg"
                    alt="Sobre Nós"
                    className="w-96 rounded-lg shadow-lg mb-8"
                    width={400}
                    height={400}
                />
                <div className="text-4xl text-center font-bold mb-8 w-full flex flex-col justify-center items-center">
                    <span className="bg-[#39B5FF] px-2 rounded-md text-neutral-100">
                        As menores taxas
                    </span>
                    <span className="bg-[#39B5FF] px-2 rounded-md text-neutral-100 -mt-2 pt-2">
                        do mercado
                    </span>
                </div>

                <p className="text-base text-start mb-4 montserrat-normal">
                    Algumas compainhas aéreas cobram taxas adicionais para quem
                    viaja sozinho. Com a gente, você não paga nada a mais por
                    isso.
                </p>
                <Btn />
            </div>
        </div>
    );
}

function Dobra6() {
    return (
        <div className="py-24 relative">
            {/* <div className={`
                absolute z-0 -left-32
                -translate-y-1/2 rounded-full
                bg-sky-600/60 h-[500px] w-48 -rotate-45 md:size-[650px] blur-[100px] mix-blend
            `}></div> */}
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
                {/* <h1 className="text-4xl font-bold mb-4">Curta mais gastando menos conosco!</h1> */}
                <Image
                    src="/img1.jpg"
                    alt="Sobre Nós"
                    className="w-96 rounded-lg shadow-lg mb-8"
                    width={400}
                    height={400}
                />

                <Btn />
            </div>
        </div>
    );
}

export { Dobra1, Dobra2, Dobra3, Dobra4, Dobra5, Dobra6 };
