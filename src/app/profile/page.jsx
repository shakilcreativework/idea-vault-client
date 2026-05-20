"use client";

import BaseButton from "@/components/ui/BaseButton";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";

import { BsFillPencilFill } from "react-icons/bs";
import { FiUserCheck } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function ProfileCard() {

    // ==========================================
    // Get current logged-in user session data
    // ==========================================
    const { data: session } = authClient.useSession();

    return (
        // ==========================================
        // Main Wrapper
        // Full screen center aligned layout
        // ==========================================
        <div className="min-h-dvh flex items-center justify-center bg-[#F8FAFD] p-4">

            {/* Card Container */}
            <div className="w-full max-w-2xl rounded-3xl overflow-hidden bg-white shadow-xl">

                {/* ==========================================
                   Top Gradient Banner Section
                ========================================== */}
                <div className="relative h-32 bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]">

                    {/* ==========================================
                       User Avatar
                       Positioned overlapping banner & content
                    ========================================== */}
                    <div className="absolute -bottom-10 left-6 w-20 h-20 rounded-full bg-white shadow-md overflow-hidden flex items-center justify-center">

                        {/* Show user uploaded image */}
                        {session?.user?.image ? (
                            <Image
                                src={session.user.image}
                                alt="User Avatar"
                                width={80}
                                height={80}
                                priority
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            // Fallback avatar if no image found
                            <Avatar className="w-full h-full">

                                <Avatar.Image
                                    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                                    alt="Default Avatar"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />

                            </Avatar>
                        )}
                    </div>
                </div>

                {/* ==========================================
                   Profile Content Section
                ========================================== */}
                <div className="pt-14 pb-6 px-6">

                    {/* User Name */}
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {session?.user?.name}
                    </h2>

                    {/* User Email */}
                    <div className="flex items-center gap-2 text-[#6B7280] mt-1">

                        <MdOutlineMarkEmailRead />

                        <span className="text-sm break-all">
                            {session?.user?.email}
                        </span>

                    </div>

                    {/* ==========================================
                       User Information Cards
                    ========================================== */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                        {/* Display Name Card */}
                        <div className="bg-gray-100 rounded-2xl p-4">

                            <p className="text-xs text-[#6B7280] mb-2">
                                DISPLAY NAME
                            </p>

                            <div className="flex items-center gap-2 text-gray-700 font-medium">

                                <FiUserCheck />

                                <span className="line-clamp-1">
                                    {session?.user?.name}
                                </span>

                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-gray-100 rounded-2xl p-4">

                            <p className="text-xs text-[#6B7280] mb-2">
                                EMAIL
                            </p>

                            <div className="flex items-center gap-2 text-gray-700 font-medium">

                                <MdOutlineMarkEmailRead />

                                <span className="line-clamp-1">
                                    {session?.user?.email}
                                </span>

                            </div>
                        </div>

                    </div>

                    {/* ==========================================
                       Update Profile Button
                    ========================================== */}
                    <div className="mt-6">

                        <BaseButton
                            className={"bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"}
                            as="link"
                            href="/update-profile"
                            text="Update Profile"
                            leftIcon={<BsFillPencilFill />}
                            animated
                            animatedSpanOne="animate-ping"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}