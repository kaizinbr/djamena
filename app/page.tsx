import AboutUs from "@/components/AboutUs";
import Feedbacks from "@/components/Feedbacks";
import {
    Dobra1,
    Dobra2,
    Dobra3,
    Dobra4,
    Dobra5,
    Dobra6,
} from "@/components/Dobras";
import Btn from "@/components/CTA/Btn";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Relatos from "@/components/Relatos";
import { MapPin, Plane, Ticket } from "lucide-react";

export default function Home() {
    return (
        <>
            <main
                className={`
                min-h-screen w-screen 
                flex flex-col items-center justify-start
                
                gap-x-4 md:gap-x-8
                
            `}
            >
                <Banner />

                <Dobra1 />
                <AboutUs />
                <div className="w-full flex flex-col gap-6 p-8 max-w-lg m-auto">
                    <div className="py-12 rounded-xl col-span-full flex justify-center items-center bg-[#f7ca96] w-full ">
                        <div
                            className={`
                            h-full z-10 px-8 gap-6 relative
                            flex flex-row items-center justify-center 
                            lg:max-w-3xl
                        `}
                        >
                            <div className="size-16">
                                <MapPin size={32} />
                            </div>
                            <div
                                className={`
                            text-base text-center col-span-6 montserrat-normal order-3 md:col-span-6 md:col-start-7
                            flex flex-col items-center justify-center
                        `}
                            >
                                <h1 className="text-2xl text-center col-span-6 font-bold mb-4">
                                    Ponto de destaque
                                </h1>
                                <p className="text-sm text-center col-span-6 montserrat-normal">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Eaque corrupti nobis error
                                    blanditiis repudiandae minus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-12 rounded-xl col-span-full flex justify-center items-center bg-[#f7ca96] w-full ">
                        <div
                            className={`
                            h-full z-10 px-8 gap-6 relative
                            flex flex-row items-center justify-center 
                            lg:max-w-3xl
                        `}
                        >
                            <div className="size-16">
                                <MapPin size={32} />
                            </div>
                            <div
                                className={`
                            text-base text-center col-span-6 montserrat-normal order-3 md:col-span-6 md:col-start-7
                            flex flex-col items-center justify-center
                        `}
                            >
                                <h1 className="text-2xl text-center col-span-6 font-bold mb-4">
                                    Ponto de destaque
                                </h1>
                                <p className="text-sm text-center col-span-6 montserrat-normal">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Eaque corrupti nobis error
                                    blanditiis repudiandae minus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-12 rounded-xl col-span-full flex justify-center items-center bg-[#f7ca96] w-full ">
                        <div
                            className={`
                            h-full z-10 px-8 gap-6 relative
                            flex flex-row items-center justify-center 
                            lg:max-w-3xl
                        `}
                        >
                            <div className="size-16">
                                <MapPin size={32} />
                            </div>
                            <div
                                className={`
                            text-base text-center col-span-6 montserrat-normal order-3 md:col-span-6 md:col-start-7
                            flex flex-col items-center justify-center
                        `}
                            >
                                <h1 className="text-2xl text-center col-span-6 font-bold mb-4">
                                    Ponto de destaque
                                </h1>
                                <p className="text-sm text-center col-span-6 montserrat-normal">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Eaque corrupti nobis error
                                    blanditiis repudiandae minus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Dobra4 />

                <div className="py-12 px-8 col-span-full flex flex-col justify-center items-center text-white">
                    <h1 className="text-center font-bold text-4xl mb-8 underline underline-offset-8 text-default-foreground">
                        Nossos serviços
                    </h1>
                    <div className="flex flex-col gap-6 mb-6 p-8 w-full rounded-lg shadow-md bg-primary">
                        <Plane size={64} />
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold">Serviço 1</h2>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, voluptas. Quisquam,
                                voluptas.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 mb-6 p-8 items-end w-full rounded-lg shadow-md bg-primary">
                        <Ticket size={64} />
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold text-right">
                                Serviço 2
                            </h2>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, voluptas. Quisquam,
                                voluptas.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 mb-6 p-8 w-full rounded-lg shadow-md bg-primary">
                        <Plane size={64} />
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold">Serviço 3</h2>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, voluptas. Quisquam,
                                voluptas.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 mb-6 p-8 items-end w-full rounded-lg shadow-md bg-primary">
                        <Ticket size={64} />
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold text-right">
                                Serviço 4
                            </h2>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, voluptas. Quisquam,
                                voluptas.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 mb-6 p-8 w-full rounded-lg shadow-md bg-primary">
                        <Plane size={64} />
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl font-bold">Serviço 5</h2>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, voluptas. Quisquam,
                                voluptas.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col px-8 rounded-xl overflow-hidden gap-6 mb-8 max-w-lg m-auto">
                    <h1 className="text-center font-bold text-4xl mb-8 underline underline-offset-8 text-default-foreground">
                        Alguns relatos
                    </h1>
                    <Relatos />
                    <button
                        className={`
                            bg-primary border-2 border-primary
                            rounded-xl p-[3px]
                            w-full text-white font-bold
                            flex items-center justify-center 
                            hover:bg-transparent hover:text-primary 
                            transition-all duration-300
                            
                        `}
                    >
                        <p className="font-bold text-lg px-4 py-3 rounded-md">
                            Veja todos os relatos
                        </p>
                    </button>
                </div>                

                {/* <div
                    className={`
                        w-full  flex flex-col items-start justify-between
                        h-[calc(100vh-64px)] max-h-[2000px] lg:min-h-[800px]
                        z-30
                        col-span-full
                        
                        bg-[url('/bg4.jpg')] md:bg-[url('/bg5.png')] bg-cover
                        bg-no-repeat bg-scroll bg-bottom
                    `}
                >
                    <div
                        className={`
                        flex flex-col items-start justify-start
                        px-4 text-neutral-100 pt-32 h-full w-full
                        bg-black bg-opacity-10
                    `}
                    >
                        <div className="flex flex-col lg:max-w-screen-lg mx-auto">
                            <h1
                                className={`
                                text-4xl sora font-bold tracking-tighter text-color
                                md:text-5xl lg:text-6xl
                            `}
                            >
                                Embarque para o seu <span>destino</span>!
                            </h1>
                            <p
                                className={`
                                text-lg mt-6 montserrat-normal
                                md:text-xl lg:text-2xl
                            `}
                            >
                                Os melhores destinos estão ao seu alcance, aqui
                                transformamos seus sonhos em realidade!
                            </p>
                            <Btn />
                        </div>
                    </div>
                </div>
                <Dobra2 />
                <Dobra3 />
                <Dobra5 />
                <Feedbacks />
                <Dobra4 /> */}
                <Footer />
            </main>
        </>
    );
}
