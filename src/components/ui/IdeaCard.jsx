import Image from "next/image";
import SectionBadge from "./SectionBadge";
import { LuTag } from "react-icons/lu";
import BaseButton from "./BaseButton";
import { Avatar } from "@heroui/react";
import { MdArrowOutward } from "react-icons/md";


const IdeaCard = () => {
    return (
        <div className="rounded-2xl overflow-hidden border shadow-xs">
            <div className="relative">
                <Image width={300} height={300} src={'https://i.ibb.co.com/gbTmwkXQ/image3.png'} alt="Idea Image" className="w-full object-cover" priority />
                <SectionBadge icon={<LuTag />} text={'AI'} className={'text-xs font-semibold text-[#091123] absolute top-3 left-3 bg-white py-1 px-3 rounded-full gap-1'} />
            </div>
            <div className="p-6 bg-white space-y-2">
                <h3 className="text-[#091123] text-lg font-bold">AI Study Planner for Students</h3>
                <p className="">An AI-powered planner that creates smart study routines.</p>

                <div className="flex items-center gap-2 justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <Avatar.Image
                                referrerPolicy="no-referrer"
                                alt="John Doe"
                                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                            <Avatar.Fallback>JD</Avatar.Fallback>
                        </Avatar>
                        <span className="text-sm">Md Jakir Hossain</span>
                    </div>
                    <BaseButton className={'capitalize font-medium text-sm text-[#6445df]'} rightIcon={<MdArrowOutward className="text-lg" />} text={'view details'} variant="ghost" size="sm" />
                </div>
            </div>
        </div>
    );
};

export default IdeaCard;