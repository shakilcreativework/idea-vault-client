"use client";

import { useState } from "react";
import Container from "./Container";
import { IoClose, IoMenu, IoMoonSharp } from "react-icons/io5";
import BaseButton from "../ui/BaseButton";
import Link from "next/link";
import Logo from "../ui/Logo";
import { authClient } from "@/lib/auth-client";
import { CustomTrigger } from "../ui/CustomTrigger";


// ==========================================
// Navbar Navigation Links
// Central place for all nav menu items
// ==========================================
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
    const { data: session, error } = authClient.useSession();
    // console.log(session);

    // ==========================================
    // State: Controls mobile menu open/close
    // ==========================================
    const [open, setOpen] = useState(false);

    // Toggle mobile menu
    const handleMenu = () => {
        setOpen(!open);
    };

    return (
        <header className="sticky top-0 z-50 shadow-sm bg-white/10 backdrop-blur-md py-3">
            <nav>
                <Container>
                    <div className="flex justify-between items-center">

                        {/* ==========================================
                           Logo Section
                        ========================================== */}
                        <Logo />


                        {/* ==========================================
                           Desktop Navigation Menu
                           Visible from md screen and above
                        ========================================== */}
                        <ul className="hidden md:flex items-center md:gap-5 lg:gap-8">
                            {navLinks.map((item) => (
                                <li
                                    key={item.name}
                                    className="font-medium text-sm text-[#5b6375] hover:text-[#091123] transition-all"
                                >
                                    <Link href={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>


                        {/* ==========================================
                           Mobile Navigation Menu
                           Shows only when menu is open
                        ========================================== */}
                        <ul
                            className={`
                                    absolute left-0 top-full w-full bg-white
                                    flex flex-col gap-5 p-4 md:hidden
                                    transition-all duration-300 ease-in-out
                                    ${open
                                    ? "opacity-100 translate-y-0 visible"
                                    : "opacity-0 -translate-y-3 invisible pointer-events-none"
                                }
                            `}
                        >
                            {navLinks.map((item) => (
                                <li
                                    onClick={() => setOpen(false)}
                                    key={item.name}
                                    className="font-medium text-sm text-[#091123] transition-all"
                                >
                                    <Link href={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                            {/* Mobile Auth Buttons */}
                            {!session?.user && 
                            
                            <div className="flex md:hidden justify-center items-center gap-3 lg:gap-4">
                                <BaseButton
                                    className={"bg-gray-200 text-[#091123]"}
                                    size="sm"
                                    text={"Login"}
                                    as="link" href={'/login'}
                                    onClick={() => {setOpen(false)}}
                                />

                                <BaseButton
                                    className={"bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"}
                                    size="sm"
                                    text={"Register"}
                                    as="link" href={'/register'}
                                    onClick={() => {setOpen(false)}}
                                />
                            </div>
                            }
                        </ul>


                        {/* ==========================================
                           Right Side Actions
                           Theme + Auth Buttons + Mobile Menu
                        ========================================== */}
                        <div className="flex items-center gap-3 lg:gap-4">

                            {/* Theme Toggle Icon */}
                            <div>
                                <IoMoonSharp className="text-xl" />
                            </div>

                            {/* Desktop Auth Buttons */}
                            {
                                session?.user ?
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <CustomTrigger />
                                        </div>
                                    </div>
                                    :
                                    <div className="hidden md:flex items-center gap-3 lg:gap-4">
                                        <BaseButton
                                            className={"bg-none text-[#091123] hover:bg-gray-200"}
                                            size="sm"
                                            text={"Login"}
                                            as="link" href={'/login'}
                                        />

                                        <BaseButton
                                            className={"bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"}
                                            size="sm"
                                            text={"Register"}
                                            as="link" href={'/register'}
                                        />
                                    </div>
                            }

                            {/* Mobile Menu Toggle Button */}
                            <div
                                onClick={handleMenu}
                                className="w-10 h-10 hover:bg-gray-200 flex justify-center items-center rounded-full md:hidden"
                            >
                                {open ? (
                                    <IoClose className="text-2xl" />
                                ) : (
                                    <IoMenu className="text-2xl" />
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </nav>
        </header>
    );
};

export default Navbar;