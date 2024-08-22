import type { Metadata } from "next";
import { Sora, Lato } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import GoogleTagManager from "@/components/custom/GoogleTagManages";
import SmoothWrapper from "@/components/SmoothWrapper";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Djamena Agency - Agência de Viagens",
    description: "Realize seu sonho de viajar agora mesmo!",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://djamenaagency.com.br",
        siteName: "Djamena Agency",
        title: "Djamena Agency",
        description:
            "Djamena Agency - Venha viajar conosco!",
        images: [
            {
                url: "https://www.djamenaagency.com.br/logo-djamena.jpg", // MUDAR !!!!
                width: 500,
                height: 500,
                alt: "logo djamena agency",
            },
        ],
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <head>
                <GoogleTagManager containerId="GTM-TSRSDD94" />
            </head>
            <body
                className={
                    sora.className +
                    `
                            min-h-screen
                            bg-slate-100
                            flex
                            justify-center
                            items-center
                        `
                }
            >
                <NextUIProvider locale="pt-br">
                    <SmoothWrapper>{children}</SmoothWrapper>
                </NextUIProvider>
            </body>
        </html>
    );
}
