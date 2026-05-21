"use client"

import Container from "@/components/shared/Container";
import BaseButton from "@/components/ui/BaseButton";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionParagraph from "@/components/ui/SectionParagraph";
import SectionTitle from "@/components/ui/SectionTitle";
import { getCommentData } from "@/lib/actions";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { TbMessages } from "react-icons/tb";


const MyInteractionsPage = () => {
    const [comment, setComment] = useState(0);
    const { data: session } = authClient.useSession();

    // useEffect for data loading function
    useEffect(() => {
        const loadingCommentData = async () => {
            const userCommentData = await getCommentData();
            const commentDataFilter = userCommentData.filter(comment => comment.userEmail === session?.user?.email);
            setComment(commentDataFilter);
        };

        if (session?.user?.email) {
            loadingCommentData();
        }
    }, [session]);

    console.log(comment);

    return (
        <div className="py-14">
            <Container>
                <div>
                    <div className="space-y-3 mb-10">
                        <SectionBadge text={'Activity'} icon={<TbMessages className="text-lg" />} />
                        <div className="space-y-1">
                            <SectionTitle text={'My interactions'} />
                            <SectionParagraph para={`Every idea you've commented on, in one place.`} />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[#6445df] font-semibold text-lg mb-1">Comments: {comment.length || 0}</h2>
                        <div className="bg-white rounded-2xl border p-5 md:p-8 lg:p-10 space-y-4 text-center">
                            <div className="space-y-2">
                                <h3 className="text-[#091123] lg:text-lg font-semibold plus-jakarta">No interactions yet</h3>
                                <p className="text-sm">Jump into an idea and share your perspective.</p>
                            </div>
                            <BaseButton
                                size="sm"
                                text={'Browse ideas'}
                                as="link"
                                href={'/add-idea'}
                                className={"rounded-xl bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyInteractionsPage;