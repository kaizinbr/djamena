import { Instagram, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#C5DDFF] text-[#001B41] text-center py-12 relative col-span-full flex justify-center items-center">
            <div
                className={`
                h-full z-10 px-4 relative
                lg:max-w-screen-lg
                flex flex-col gap-8
                justify-center items-center
            `}
            >
                <Image
                    src="/logo-djamena.jpg"
                    alt="Logo da Djamena Agency"
                    width={250}
                    height={250}
                />

                <div className="flex flex-col gap-4 justify-center items-center mb-2">
                    <div className="flex flex-row">
                        <Instagram size={24} />
                        <Link
                            href="https://www.instagram.com/djamena_viagens/"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-2"
                        >
                            @djamena_viagens
                        </Link>
                    </div>
                    <div className="flex flex-row">
                        <Mail size={24} />
                        <a
                            href="mailto:djamenaviagens24@gmail.com"
                            rel="noreferrer"
                            className="ml-2"
                        >
                            djamenaviagens24@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-row">
                        <SiWhatsapp className="size-6" />
                        <Link
                            href="https://api.whatsapp.com/send?phone=5585987688781"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-2"
                        >
                            (85) 98768-8781
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="text-xs mb-2">
                        © 2024 Djamena Agency. Todos os direitos reservados.
                    </p>
                    <p className="text-xs mb-2">
                        <Link
                            href="/cadastur.png"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-2 underline"
                        >
                            Estamos no Cadastur.
                        </Link>{" "}
                        CNPJ 52.984.076/0001-00
                    </p>
                    <Link
                        href="mailto:kaiolucas1812@gmail.com?subject=Gostaria de notificar uma situação com direitos autorais"
                        rel="noreferrer"
                        className="mb-4 text-xs underline"
                    >
                        DMCA/LDA
                    </Link>
                    <p className="text-xs">
                        <br />
                        Feito por{" "}
                        <Link
                            href="https://www.instagram.com/soudigitalpb"
                            target="_blank"
                            rel="noreferrer"
                            className=" underline"
                        >
                            Agência Sou Digital
                        </Link>{" "}
                        e{" "}
                        <Link
                            href="https://kaizin.com.br"
                            target="_blank"
                            rel="noreferrer"
                            className=" underline"
                        >
                            Kaio Nunes.
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
