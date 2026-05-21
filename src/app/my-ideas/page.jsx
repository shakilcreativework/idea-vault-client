"use client"

import Container from "@/components/shared/Container";
import SectionParagraph from "@/components/ui/SectionParagraph";
import SectionTitle from "@/components/ui/SectionTitle";
import { getIdeasData, getUserData } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuTag } from "react-icons/lu";
import { formatDistanceToNow } from "date-fns";
import BaseButton from "@/components/ui/BaseButton";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";


const MyIdeasPage = () => {
    const [idea, setIdea] = useState([]);
    const { data: session } = authClient.useSession();

    useEffect(() => {
        const loginUserData = async () => {
            const userIdeaData = await getIdeasData();
            const data = userIdeaData.filter(idea => idea?.userEmail === session?.user?.email);
            setIdea(data);
        }

        if (session?.user?.email) {
            loginUserData();
        }
    }, [session]);

    console.log(idea);

    return (

        <div className="py-14">
            <Container>
                <div className="space-y-5 sm:space-y-0 mb-10 flex flex-wrap justify-between items-end">
                    <div className="space-y-1">
                        <SectionTitle text={'My ideas'} />
                        <SectionParagraph para={`Manage and update everything you've shared.`} />
                    </div>
                    <div>
                        <BaseButton
                            as="link"
                            href={'/add-idea'}
                            leftIcon={<FaPlus />}
                            size="sm"
                            text={"New idea"}
                            className={"rounded-xl bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"}
                        />
                    </div>
                </div>
                <div className="space-y-5">
                    {
                        idea.map((ideaInfo, index) => ideaInfo.userEmail === session?.user?.email ?
                            <div
                                key={index}
                                className="
                                flex flex-col lg:flex-row
                                lg:items-center lg:justify-between
                                gap-5 bg-white rounded-2xl border p-4
                            "
                            >

                                {/* ==========================================
                                Idea Content
                                ========================================== */}
                                <div className="flex flex-col md:flex-row md:items-center gap-5 w-full">

                                    {/* Idea Image */}
                                    <Image
                                        src={ideaInfo?.imageURL}
                                        alt={ideaInfo?.ideaTitle}
                                        width={500}
                                        height={200}
                                        priority
                                        className="
                                        w-full md:w-52
                                        h-52 md:h-32
                                        rounded-2xl object-cover shrink-0
                                    "
                                    />

                                    {/* Idea Info */}
                                    <div className="space-y-3 flex-1">

                                        {/* Category + Time */}
                                        <div className="flex flex-wrap items-center gap-2">

                                            <span
                                                className="
                                                inline-flex items-center gap-2
                                                rounded-full px-3 py-1 text-sm font-medium
                                                bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]
                                                text-white
                                            "
                                            >
                                                <LuTag />
                                                {ideaInfo?.category}
                                            </span>

                                            <span className="text-xs text-[#5b6375]">
                                                {formatDistanceToNow(
                                                    new Date(ideaInfo?.createdAt),
                                                    { addSuffix: true }
                                                ).replace("about ", "")}
                                            </span>
                                        </div>

                                        {/* Title + Description */}
                                        <div className="space-y-1">

                                            <h3 className="text-lg font-bold text-[#091123]">
                                                {ideaInfo?.ideaTitle}
                                            </h3>

                                            <p className="text-sm text-[#5b6375] leading-6">
                                                {ideaInfo?.shortDescription}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* ==========================================
                                Action Buttons
                                ========================================== */}
                                <div className="flex items-center gap-3 flex-wrap">

                                    <BaseButton
                                        className={"bg-[#D4F4FF] text-[#082047]"}
                                        size="sm"
                                        leftIcon={
                                            <MdOutlineModeEditOutline className="text-lg" />
                                        }
                                        text={"Edit"}
                                    />

                                    <BaseButton
                                        className={"bg-[#FFE2E2] text-[#082047]"}
                                        size="sm"
                                        leftIcon={
                                            <AiOutlineDelete className="text-red-500 text-lg" />
                                        }
                                        text={"Delete"}
                                    />
                                </div>

                            </div>
                            :
                            <div key={index} className="bg-white rounded-2xl border p-5 md:p-8 lg:p-10 space-y-4 text-center">
                                <div className="space-y-2">
                                    <h3 className="text-[#091123] lg:text-lg font-semibold plus-jakarta">You haven&apos;t shared an idea yet</h3>
                                    <p className="text-sm">Your first idea is the hardest. Then it gets easy.</p>
                                </div>
                                <BaseButton
                                    size="sm"
                                    text={'Share your first idea'}
                                    as="link"
                                    href={'/add-idea'}
                                    className={"rounded-xl bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"} />
                            </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default MyIdeasPage;