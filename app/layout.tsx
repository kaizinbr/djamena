import type { Metadata } from "next";
import {  Sora, Lato } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const sora = Sora({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

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
        <html lang="en">
            <body className={sora.className + `
                min-h-screen
                bg-slate-100
                flex
                justify-center
                items-center
            `} >{children}</body>
        </html>
    );
}
