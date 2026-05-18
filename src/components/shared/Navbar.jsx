"use client";

import { useState } from "react";
import Container from "./Container";
import { FaMagic } from "react-icons/fa";


const navLinks = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Ideas",
        path: "/ideas",
    },
    {
        name: "Add Idea",
        path: "/add-idea",
    },
    {
        name: "My Ideas",
        path: "/my-ideas",
    },
    {
        name: "My Interactions",
        path: "/my-interactions",
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // mobile menu toggle
    const handleMenu = () => {
        setOpen(!open);
    };

    return (
        <header className="sticky top-0 z-50 shadow-sm backdrop-blur-xl py-3">
            <nav className="">
                <Container>
                    <div className="flex items-center gap-2">
                        <div className=" flex justify-center items-center rounded-full w-10 h-10 bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]">
                            <FaMagic className="text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-[#091123]">Idea<span>Vault</span></h3>
                    </div>
                </Container>
            </nav>
        </header>
    );
};

export default Navbar;