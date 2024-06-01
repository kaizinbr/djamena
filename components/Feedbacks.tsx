import Carousel from "./Carousel"

export default function Feedbacks() {
    return (
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
