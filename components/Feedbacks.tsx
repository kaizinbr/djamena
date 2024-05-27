import Image from "next/image";
import Carousel from "./Carousel"

export default function Feedbacks() {
    return (
        // <div className="py-24 relative col-span-full flex justify-center items-center">
        //     <div className="flex flex-col items-center justify-center h-full px-4 z-10 relative lg:max-w-screen-lg">
        //         <h1 className="text-4xl text-center font-bold mb-8">
        //             Quem viajou conosco disse:
        //         </h1>
        //         <div
        //             className={`
        //             h-[400px] w-full bg-[#39B5FF] rounded-2xl flex
        //         `}
        //         >
        //             <div className="m-auto p-4">
        //                 <p className="text-sm text-center text-neutral-100 font-medium mb-4">
        //                     &quot;A agência Djamena é a melhor que de todas que
        //                     eu já conheci. Os profissionais são atenciosos,
        //                     eficientes e ágeis no atendimento. Eu nunca tive
        //                     problemas com passagens e seguros de viagem nacional
        //                     e internacionais que comprei nesta agência. Eu super
        //                     indico as pessoas que comprar as passagens, seguros
        //                     e realizar reservas de
        //                     hospedagem nesta agência&quot;
        //                 </p>
        //                 <p className="text-base text-center text-neutral-100">
        //                     - Mike Amisi
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="pb-24 relative col-span-full">
            <div className="flex flex-col items-center justify-center h-full z-10 relative">
                <h1 className="text-4xl text-center font-bold px-4 mb-8">Quem viajou conosco disse:</h1>
                <div className="w-[100vw] max-w-full overflow-hidden">
                    <Carousel />
                </div>
            </div>
        </div>
    );
}
