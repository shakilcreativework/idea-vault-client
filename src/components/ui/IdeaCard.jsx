import Image from "next/image";
import SectionBadge from "./SectionBadge";
import { LuTag } from "react-icons/lu";
import BaseButton from "./BaseButton";
import { Avatar } from "@heroui/react";
import { MdArrowOutward } from "react-icons/md";


const IdeaCard = ({ ideaInfo }) => {
    // console.log(ideaInfo);
    const { _id, ideaTitle, category, shortDescription, userName, userImage, imageURL } = ideaInfo;

    return (
        <div className="rounded-2xl overflow-hidden border shadow-xs">
            <div>
                <Image
                    width={300}
                    height={290}
                    src={imageURL}
                    alt="Idea Image"
                    className="w-full h-75 aspect-auto object-cover"
                    priority
                />
                <SectionBadge icon={<LuTag />} text={category} className={'text-xs font-semibold text-[#091123] absolute top-3 left-3 bg-white py-1 px-3 rounded-full gap-1'} />
            </div>
            <div className="p-6 bg-white space-y-2 flex flex-col">
                <h3 className="text-[#091123] text-lg font-bold">{ideaTitle}</h3>
                <p className="">{shortDescription}</p>

                <div className="flex items-center gap-2 justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <Avatar.Image
                                referrerPolicy="no-referrer"
                                alt={userName}
                                src={userImage} />
                            <Avatar.Fallback>JD</Avatar.Fallback>
                        </Avatar>
                        <span className="text-sm">{userName}</span>
                    </div>
                    <BaseButton as="link" href={`/add-idea/${_id}`} className={'capitalize font-medium text-sm text-[#6445df]'} rightIcon={<MdArrowOutward className="text-lg" />} text={'view details'} variant="ghost" size="sm" />
                </div>
            </div>
        </div>
    );
};

export default IdeaCard;