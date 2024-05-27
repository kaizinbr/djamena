// import { Navbar } from "@nextui-org/react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Feedbacks from "@/components/Feedbacks";
import { Dobra1, Dobra2, Dobra3, Dobra4, Dobra5, Dobra6 } from "@/components/Dobras";
import Teste from "@/components/Teste";
import Btn from "@/components/CTA/Btn";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            {/* <Navbar /> */}

            <main
                className={`
                min-h-screen w-full flex-col items-center justify-center
                grid 
                grid-cols-2 md:grid-cols-6
                gap-x-4 md:gap-x-8
                
            `}
            >
                <div className={`
                    bg-neutral-100 flex flex-col items-center justify-center
                    p-4 col-span-full text-center text-[#1765d6]
                    h-16
                `}>
                    <h2 className="text-2xl font-bold w-full">Djamena Agency</h2>
                </div>
                <div
                    className={`
                        w-full  flex flex-col items-start justify-between
                        h-[calc(100vh-64px)] lg:min-h-[800px]
                        z-30
                        col-span-full
                        
                        bg-[url('/bg4.jpg')] bg-cover
                        bg-no-repeat bg-scroll bg-center
                    `}
                >
                    <div
                        className={`
                        flex flex-col items-start justify-start
                        px-4 text-neutral-100 pt-32 h-full w-full
                        bg-black bg-opacity-10
                    `}
                    ><div className="flex flex-col lg:max-w-screen-lg mx-auto">
                        
                            <h1
                                className={`
                                text-4xl sora font-bold tracking-tighter text-color
                                md:text-5xl lg:text-6xl
                            `}
                            >
                                Embarque para o seu {" "}
                                <span>destino</span>!
                            </h1>
                            <p className={`
                                text-lg mt-6 mb-8 montserrat-normal
                                md:text-xl lg:text-2xl
                            `}>
                                Os melhores destinos estão ao seu alcance, aqui transformamos seus sonhos em realidade!
                            </p>
                            <Btn />
                    </div>
                    </div>
                </div>
                <Dobra1 />
                <AboutUs />
                <Dobra2 />
                <Dobra3 />
                <Dobra5 />
                <Feedbacks />
                <Dobra4 />
                <Footer />
            </main>
        </>
    );
}
