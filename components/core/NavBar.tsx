"use client";
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "Sobre Nós",
        "Missão e valores",
        "Depoimentos",
        "Contato",
        "Agência Física",
    ];

    return (
        <Navbar
            isBordered
            isBlurred={false}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className="w-screen"
        >

            <NavbarContent className=" pr-3" justify="start">
                <NavbarBrand>
                    <p className="font-bold text-inherit">Djamena</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem className="">
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                    Sobre Nós
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Missão
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Depoimentos
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contato
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarContent className="sm:block hidden" justify="end">
            </NavbarContent>

            <NavbarMenu className="divide-y divide-neutral-600 gap-0">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}
                        className={`
                                py-4
                            `}
                    >
                        <Link
                            className="w-full"
                            // color={
                            //     index === 2
                            //         ? "warning"
                            //         : index === menuItems.length - 1
                            //         ? "danger"
                            //         : "foreground"
                            // }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
