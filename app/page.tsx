// import { Navbar } from "@nextui-org/react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Feedbacks from "@/components/Feedbacks";
import { Dobra1, Dobra2, Dobra3, Dobra4, Dobra5, Dobra6 } from "@/components/Dobras";
import Teste from "@/components/Teste";
import Btn from "@/components/CTA/Btn";
import Faq from "@/components/Faq";

export default function Home() {
    return (
        <>
            {/* <Navbar /> */}

            <main
                className={`
                flex min-h-screen w-full flex-col items-center justify-center
                max-w-[416px] mx-auto
            `}
            >
                <div
                    className={`
                        w-full  flex flex-col items-start justify-between
                        h-screen max-h-[800px]
                        z-30
                        pt-16

                        
                        bg-[url('/bg4.jpg')] bg-cover
                        bg-no-repeat bg-scroll bg-top
                    `}
                >
                    <div
                        className={`
                        flex flex-col items-start justify-start
                        px-4 text-neutral-100 mt-16
                    `}
                    >
                        <h1
                            className={`
                            text-4xl sora font-bold tracking-tighter text-color
                        `}
                        >
                            Embarque para o seu {" "}
                            <span>destino</span>!
                        </h1>
                        <p className="text-lg mt-6 mb-8 montserrat-normal">
                            Os melhores destinos estão ao seu alcance, aqui transformamos seus sonhoes em realidade!
                        </p>
                        <Btn />
                    </div>
                    {/* <picture
                        className={`
                            w-full h-auto overflow-hidden
                        `}
                    >
                        <Image
                            src="/main.webp"
                            alt="aaa"
                            width={400}
                            height={572}
                            className={`
                                h-full object-cover left-12 relative
                            `}
                        />
                    </picture> */}
                </div>
                <Dobra1 />
                <AboutUs />
                <Dobra2 />
                <Dobra3 />
                <Dobra5 />
                {/* <Dobra6 /> */}
                <Feedbacks />
                <Dobra4 />
                <Faq />
                {/* <Teste /> */}
            </main>
        </>
    );
}
