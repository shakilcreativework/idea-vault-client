"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfile() {

    // ==================================================
    // Get current logged-in user session
    // ==================================================
    const { data: session } = authClient.useSession();

    // Next.js router for navigation
    const router = useRouter();

    // ==================================================
    // Local state for editable profile fields
    // Default values come from current user session
    // ==================================================
    const [name, setName] = useState(() => session?.user?.name || "");
    const [image, setImage] = useState(() => session?.user?.image || "");

    // Loading state while updating profile
    const [loading, setLoading] = useState(false);

    // ==================================================
    // Handle Profile Update
    // Updates user name + profile image
    // ==================================================
    const handleUpdate = async () => {
        try {
            setLoading(true);

            // Update user information
            await authClient.updateUser({
                name,
                image,
            });

            // Refresh session so updated data appears instantly
            await authClient.refreshSession();

            // Success notification
            toast.success("Profile updated successfully");

            // Redirect to profile page
            router.push("/profile");

        } catch (error) {

            // Error notification
            toast.error("Update failed!");

        } finally {

            // Stop loading state
            setLoading(false);
        }
    };

    // ==================================================
    // Cancel update and return to profile page
    // ==================================================
    const cancelUpdate = () => {
        router.push("/profile");
    };

    return (
        <div className="min-h-dvh flex items-center justify-center bg-[#F8FAFD] p-4">

            {/* ==================================================
                Main Card Container
            ================================================== */}
            <div className="w-full max-w-2xl rounded-3xl shadow-xl overflow-hidden bg-white">

                {/* ==================================================
                    Top Gradient Banner Section
                ================================================== */}
                <div className="relative h-32 bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]">

                    {/* ==================================================
                        Profile Avatar
                    ================================================== */}
                    <div className="absolute -bottom-10 left-6 w-20 h-20 rounded-full bg-white shadow-md overflow-hidden">

                        {image && (
                            <Image
                                src={image}
                                alt="avatar"
                                width={80}
                                height={80}
                                priority
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                </div>

                {/* ==================================================
                    Profile Content Area
                ================================================== */}
                <div className="pt-14 pb-8 px-6">

                    {/* User Name Heading */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        {name}
                    </h2>

                    {/* ==================================================
                        Editable Input Fields
                    ================================================== */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Display Name Input */}
                        <div className="bg-gray-100 rounded-2xl p-4">
                            <p className="text-xs text-gray-500 mb-2">
                                DISPLAY NAME
                            </p>

                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-white rounded-lg px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        {/* Profile Image URL Input */}
                        <div className="bg-gray-100 rounded-2xl p-4">
                            <p className="text-xs text-gray-500 mb-2">
                                IMAGE URL
                            </p>

                            <input
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full bg-white rounded-lg px-3 py-2 text-sm outline-none"
                            />
                        </div>
                    </div>

                    {/* ==================================================
                        Live Avatar Preview
                    ================================================== */}
                    {image && (
                        <div className="mt-6">

                            <p className="text-sm text-gray-500 mb-2">
                                Preview:
                            </p>

                            <div className="w-16 h-16 rounded-full overflow-hidden border">
                                <Image
                                    src={image}
                                    alt="preview"
                                    width={64}
                                    height={64}
                                    priority
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    )}

                    {/* ==================================================
                        Action Buttons
                    ================================================== */}
                    <div className="mt-6 flex gap-3">

                        {/* Save Button */}
                        <button
                            onClick={handleUpdate}
                            disabled={loading}
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition-all"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>

                        {/* Cancel Button */}
                        <button
                            onClick={cancelUpdate}
                            className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg transition-all"
                        >
                            Cancel
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}