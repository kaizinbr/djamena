import Image from "next/image"

export default function Feedbacks() {


    return (
        <div className="py-24 relative">
            {/* <div className={`
                absolute z-0 left-16 top-10
                -translate-y-1/2 
                bg-sky-400 h-[500px] w-32 -rotate-[53deg] md:size-[650px] blur-[100px] mix-blend
            `}></div> */}
            <div className="flex flex-col items-center justify-center h-full px-4 z-10 relative">
                <h1 className="text-4xl text-center font-bold mb-8">Quem viajou conosco disse:</h1>
                <div className={`
                    h-[400px] w-full bg-[#39B5FF] rounded-2xl flex
                `}>
                    <div className="m-auto">
                        <p className="text-2xl text-center text-neutral-100 font-bold mb-4">&quot;A viagem foi incrível, a equipe é muito atenciosa e prestativa. Recomendo a todos!&quot;</p>
                        <p className="text-lg text-center text-neutral-100">- João da Silva</p>
                    </div>
                </div>
            </div>
        </div>
    )
}