import type { Metadata } from "next";
import { Sora, Lato } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import GoogleTagManager from "@/components/custom/GoogleTagManages";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Djamena Agency - Agência de Viagens",
    description: "Realize seu sonho de viajar agora mesmo!",
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
                <NextUIProvider locale="pt-br">{children}</NextUIProvider>
            </body>
        </html>
    );
}
