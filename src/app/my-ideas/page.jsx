"use client"

import Container from "@/components/shared/Container";
import SectionParagraph from "@/components/ui/SectionParagraph";
import SectionTitle from "@/components/ui/SectionTitle";
import { getUserData } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuTag } from "react-icons/lu";

const MyIdeasPage = () => {
    const [idea, setIdea] = useState([]);
    const { data: session } = authClient.useSession();

    useEffect(() => {
        const loadData = async () => {
            const data = await getUserData(session?.user?.email);
            // console.log(data);
            setIdea(data);
        };

        if (session?.user?.email) {
            loadData();
        }
    }, [session]);

    console.log(idea);

    return (
        <div className="py-14">
            <Container>
                <div className="space-y-2">
                    <SectionTitle text={'My ideas'} />
                    <SectionParagraph para={`Manage and update everything you've shared.`} />
                </div>
                <div className="bg-white rounded-2xl border p-4">
                    {
                        idea.map((ideaInfo, idx) => <div className="flex justify-between items-center" key={idx}>
                            <div className="flex justify-between items-center">
                                <Image className="rounded-2xl h-30 w-auto" width={200} height={150} priority src={ideaInfo?.imageURL} alt={ideaInfo?.ideaTitle} />
                                <div>
                                    <span className="
                                                    inline-flex items-center gap-2
                                                    rounded-full px-3 py-1 text-sm font-medium
                                                    bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]
                                                    text-white
                                                  ">
                                        <LuTag />
                                        {ideaInfo?.category}
                                    </span>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default MyIdeasPage;