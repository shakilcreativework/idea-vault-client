import Link from "next/link";
import Logo from "../ui/Logo";
import Container from "./Container";
import { getCategories, getPlatform } from "@/lib/actions";
import { FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

// ==========================================================
// Footer Component
// Main website footer with:
// - Brand information
// - Platform links
// - Category links
// - Social/community section
// ==========================================================
const Footer = () => {

    // Get navigation data
    const platform = getPlatform();
    const categories = getCategories();

    return (
        <div className="py-14 bg-[linear-gradient(135deg,oklch(0.97_0.03_280),oklch(0.97_0.04_220))]">
            <Container>

                {/* ======================================================
                    Footer Main Grid Layout
                    Responsive columns:
                    - Mobile: 1 column
                    - Tablet: 3 columns
                    - Desktop: 4 columns
                ======================================================= */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6">

                    {/* ==================================================
                        Brand / About Section
                        Logo + Short platform description
                    =================================================== */}
                    <div className="space-y-4">
                        <Logo />

                        <span className="text-[#5b6375] text-sm">
                            The community vault for the next generation
                            of startup ideas. Share, refine, and ship.
                        </span>
                    </div>

                    {/* ==================================================
                        Platform Navigation Links
                        Dynamic links from getPlatform()
                    =================================================== */}
                    <div className="space-y-4">
                        <h3 className="plus-jakarta text-[#091123] text-sm font-semibold">
                            Platform
                        </h3>

                        <ul className="flex flex-col gap-3">
                            {platform.map((item) => (
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
                    </div>

                    {/* ==================================================
                        Categories Navigation Links
                        Dynamic links from getCategories()
                    =================================================== */}
                    <div className="space-y-4">
                        <h3 className="plus-jakarta text-[#091123] text-sm font-semibold">
                            Categories
                        </h3>

                        <ul className="flex flex-col gap-3">
                            {categories.map((item) => (
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
                    </div>

                    {/* ==================================================
                        Newsletter / Social Links Section
                        Small CTA + social media icons
                    =================================================== */}
                    <div className="space-y-4">
                        <h3 className="plus-jakarta text-[#091123] text-sm font-semibold">
                            Stay in the loop
                        </h3>

                        <span className="text-[#5b6375] text-sm">
                            Weekly digest of the boldest startup ideas.
                        </span>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-3 mt-4">

                            {/* Email */}
                            <Link
                                href="/"
                                className="flex justify-center items-center font-medium text-[#5b6375] hover:text-[#091123] transition-all"
                            >
                                <FaRegEnvelope />
                            </Link>

                            {/* Twitter / X */}
                            <Link
                                href="/"
                                className="flex justify-center items-center font-medium text-[#5b6375] hover:text-[#091123] transition-all"
                            >
                                <FaXTwitter />
                            </Link>

                            {/* GitHub */}
                            <Link
                                href="/"
                                className="flex justify-center items-center font-medium text-[#5b6375] hover:text-[#091123] transition-all"
                            >
                                <FiGithub />
                            </Link>

                            {/* LinkedIn */}
                            <Link
                                href="/"
                                className="flex justify-center items-center font-medium text-[#5b6375] hover:text-[#091123] transition-all"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="my-10">
                    <hr />
                </div>

                {/* ======================================================
                    Bottom Footer Bar
                    Copyright + Contact Info
                ======================================================= */}
                <div className="text-[#5b6375] text-xs flex justify-between items-center">

                    {/* Copyright */}
                    <span>
                        &copy; 2026 IdeaVault. Built for founders, by founders.
                    </span>

                    {/* Contact / Location */}
                    <span>
                        hello@ideavault.app · San Francisco · Remote
                    </span>
                </div>
            </Container>
        </div>
    );
};

export default Footer;