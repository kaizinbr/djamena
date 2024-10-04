import { Instagram, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className=" text-center w-full py-12 relative col-span-full flex justify-center items-center">
            <div
                className={`
                h-full z-10 px-4 relative
                lg:max-w-screen-lg
                flex flex-col gap-8
                justify-center items-center
            `}
            >
                <Image
                    src="/DJAMENA-LOGOV1.webp"
                    alt="Logo da Djamena Viagens"
                    width={250}
                    height={250}
                    className="rounded-lg"
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
                            href="mailto:contato@djamenaviagens.com.br"
                            rel="noreferrer"
                            className="ml-2"
                        >
                            contato@djamenaviagens.com.br
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
                        © 2024 Djamena Viagens. Todos os direitos reservados.
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
