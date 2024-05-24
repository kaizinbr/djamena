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

function Dobra3() {
    return (
        <div className={`py-16 w-full bg-[#1C3A60]`}>
            <div
                className={`
                    flex flex-col gap-4 items-start justify-start h-full px-4 relative z-10
                    text-neutral-100
                `}
            >
                <Image
                    src="/pexels-borja-lopez-10590781.jpg"
                    alt="Sobre Nós"
                    className="w-96  rounded-lg shadow-lg"
                    width={400}
                    height={400}
                />
                <h1 className={`text-4xl font-bold mb-3`}>
                    Assistência até o check-out
                </h1>

                <p className="text-base text-start montserrat-normal">
                    Nossa equipe oferece toda a assistência que você precisar,
                    desde o momento que você entra em contato conosco até o
                    momento do check-out.
                </p>

                {/* <div
                    className={`
                    px-8 py-4 rounded-xl
                    bg-slate-100
                    w-full flex flex-col items-center justify-center
                `}
                >
                    <BadgePercent className="size-16 mb-3" />
                    <h2 className={`text-2xl text-center font-bold`}>
                        As menores taxas do mercado
                    </h2>
                    <span></span>
                </div>
                <div
                    className={`
                    px-8 py-4 rounded-xl
                    bg-slate-100
                    w-full flex flex-col items-center justify-center
                `}
                >
                    <Hotel className="size-16 mb-3" />
                    <h2 className={`text-2xl text-center font-bold`}>
                        Assistência do contato ao check-out
                    </h2>
                    <span></span>
                </div>
                <div
                    className={`
                    px-8 py-4 rounded-xl
                    bg-slate-100
                    w-full flex flex-col items-center justify-center
                `}
                >
                    <BadgePercent className="size-16 mb-3" />
                    <h2 className={`text-2xl text-center font-bold`}>
                        As menores taxas do mercado
                    </h2>
                    <span></span>
                </div> */}
            </div>
        </div>
    );
}

function Dobra2() {
    return (
        <div className="py-24 relative">
            {/* <div className={`
                absolute z-0 -left-32
                -translate-y-1/2 rounded-full
                bg-sky-600/60 h-[500px] w-48 -rotate-45 md:size-[650px] blur-[100px] mix-blend
            `}></div> */}
            <div className="flex flex-col items-start justify-start h-full  z-10 px-4 relative">
                <Image
                    src="/pexels-julieaagaard-20969831.jpg"
                    alt="Sobre Nós"
                    className="w-96  rounded-lg shadow-lg mb-8"
                    width={400}
                    height={400}
                />

                <h1 className="text-4xl font-bold mb-8">
                    Conheça destinos paradisíacos e aproveite cada momento!
                </h1>

                <p className="text-base text-start mb-4 montserrat-normal">
                    Algumas compainhas aéreas cobram taxas adicionais para quem
                    viaja sozinho. Com a gente, você não paga nada a mais por
                    isso.
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
                <h1 className={`text-4xl font-bold mb-8`}>
                    Hora de decidir seu<br />
                    <span
                        className={`bg-[#39B5FF] px-1 rounded-md text-stone-100`}
                    >
                        destino
                    </span>
                    !
                </h1>

                {/* <p className="text-sm text-start mb-4 montserrat-normal">
                    Algumas compainhas aéreas cobram taxas adicionais para quem
                    viaja sozinho. Com a gente, você não paga nada a mais por
                    isso.
                </p> */}
            <Image
                src="/bg.jpg"
                alt="aaa"
                width={500}
                height={500}
                className={`
                    w-96  rounded-lg shadow-lg mb-8
                `}
            />
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
