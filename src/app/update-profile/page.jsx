
"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
    const { data: session } = authClient.useSession();
    const router = useRouter();

    const [name, setName] = useState(() => session?.user?.name || "");
    const [image, setImage] = useState(() => session?.user?.image || "");
    const [loading, setLoading] = useState(false);

    //   update profile
    const handleUpdate = async () => {
        try {
            setLoading(true);

            await authClient.updateUser({
                name,
                image,
            });

            await authClient.refreshSession();

            toast.success("Profile updated successfully");
            router.push("/");
        } catch (error) {
            toast.error("Update failed!");
        } finally {
            setLoading(false);
        }
    };

    // cancel update profile
    const cancelUpdate = () => {
        router.push("/profile");
    }

    return (
        <div className="min-h-dvh flex items-center justify-center bg-[#F8FAFD] p-4">
            <div className="w-full max-w-2xl rounded-3xl shadow-xl overflow-hidden bg-white">

                {/* Top linear */}
                <div className="relative h-32 bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]">

                    {/* Avatar */}
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

                {/* Content */}
                <div className="pt-14 pb-8 px-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        {name}
                    </h2>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Name */}
                        <div className="bg-gray-100 rounded-2xl p-4">
                            <p className="text-xs text-gray-500 mb-2">DISPLAY NAME</p>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-white rounded-lg px-3 py-2 text-sm outline-none"
                            />
                        </div>

                        {/* Image URL */}
                        <div className="bg-gray-100 rounded-2xl p-4">
                            <p className="text-xs text-gray-500 mb-2">IMAGE URL</p>
                            <input
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full bg-white rounded-lg px-3 py-2 text-sm outline-none"
                            />
                        </div>

                    </div>

                    {/* Preview */}
                    {image && (
                        <div className="mt-6">
                            <p className="text-sm text-gray-500 mb-2">Preview:</p>
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

                    {/* Buttons */}
                    <div className="mt-6 flex gap-3">
                        <button
                            onClick={handleUpdate}
                            disabled={loading}
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg"
                        >
                            {loading ? "Saving..." : "Save"}
                        </button>

                        <button
                            onClick={cancelUpdate}
                            className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}