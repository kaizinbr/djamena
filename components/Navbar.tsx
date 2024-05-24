"use client";

import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from "@nextui-org/react";
// import AcmeLogo from "@/public/tplogo.jpg";
import Image from "next/image";

export default function App() {
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <header
            className={`
                sticky
                top-0
                z-50
            
            `}
        >
            <Navbar
                className={`
                    
                    shadow-md
                    border-b
                    w-screen
                `}
            >
                {/* <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle />
                </NavbarContent> */}

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <Image
                            src="/tplogo.jpg"
                            alt="ACME"
                            width={80}
                            height={80}
                        />
                        {/* <p className="font-bold text-inherit">ACME</p> */}
                    </NavbarBrand>
                </NavbarContent>
                <HiMenuAlt4 className="size-8 mr-4" />
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarBrand>
                        <Image
                            src="/tplogo.jpg"
                            alt="ACME"
                            width={40}
                            height={40}
                        />
                        {/* <p className="font-bold text-inherit">ACME</p> */}
                    </NavbarBrand>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page" color="warning">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                {/* <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="warning" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent> */}
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2
                                        ? "warning"
                                        : index === menuItems.length - 1
                                        ? "danger"
                                        : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </header>
    );
}
