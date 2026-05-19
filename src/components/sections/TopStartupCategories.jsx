import { IoArrowForward } from "react-icons/io5";
import BaseButton from "../ui/BaseButton";
import SectionTitle from "../ui/SectionTitle";
import { GiProcessor } from "react-icons/gi";
import { PiBrain } from "react-icons/pi";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsHeartPulse } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { LuLeaf } from "react-icons/lu";


const TopStartupCategories = () => {
    return (
        <div className="py-20">
            <div className="flex justify-between tems-center">
                <SectionTitle text={'Top startup categories'} />
                <BaseButton className={'hidden sm:block'} text={'Browse all'} size="sm" variant="ghost" rightIcon={<IoArrowForward />} />
            </div>
            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-6 mt-10 md:mt-14">
                <div className="p-8 bg-white flex items-center gap-4 border rounded-xl">
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-[linear-gradient(135deg,oklch(0.97_0.03_280),oklch(0.97_0.04_220))]">
                        <GiProcessor className="text-2xl" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-[#091123] text-lg plus-jakarta font-semibold">Tech</h3>
                        <p className="text-[#5b6375] text-sm">Developer tools, SaaS, infra and platforms.</p>
                    </div>
                </div>
                <div className="p-8 bg-white flex items-center gap-4 border rounded-xl">
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-[linear-gradient(135deg,oklch(0.97_0.03_280),oklch(0.97_0.04_220))]">
                        <PiBrain className="text-2xl" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-[#091123] text-lg plus-jakarta font-semibold">AI</h3>
                        <p className="text-[#5b6375] text-sm">Applied AI products, agents and ML tooling.</p>
                    </div>
                </div>
                <div className="p-8 bg-white flex items-center gap-4 border rounded-xl">
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-[linear-gradient(135deg,oklch(0.97_0.03_280),oklch(0.97_0.04_220))]">
                        <RiGraduationCapLine className="text-2xl" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-[#091123] text-lg plus-jakarta font-semibold">Education</h3>
                        <p className="text-[#5b6375] text-sm">Learning, edtech and skill platforms.</p>
                    </div>
                </div>
                <div className="p-8 bg-white flex items-center gap-4 border rounded-xl">
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-[linear-gradient(135deg,oklch(0.97_0.03_280),oklch(0.97_0.04_220))]">
                        <BsHeartPulse className="text-2xl" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-[#091123] text-lg plus-jakarta font-semibold">Health</h3>
                        <p className="text-[#5b6375] text-sm">Clinical, wellness and biotech ventures.</p>
                    </div>
                </div>
                <div className="p-8 bg-white flex items-center gap-4 border rounded-xl">
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-[linear-gradient(135deg,oklch(0.97_0.03_280),oklch(0.97_0.04_220))]">
                        <CiWallet className="text-2xl" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-[#091123] text-lg plus-jakarta font-semibold">FinTech</h3>
                        <p className="text-[#5b6375] text-sm">Payments, lending, investing and banking.</p>
                    </div>
                </div>
                <div className="p-8 bg-white flex items-center gap-4 border rounded-xl">
                    <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-[linear-gradient(135deg,oklch(0.97_0.03_280),oklch(0.97_0.04_220))]">
                        <LuLeaf className="text-2xl" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-[#091123] text-lg plus-jakarta font-semibold">Green Energy</h3>
                        <p className="text-[#5b6375] text-sm">Climate, clean energy and sustainability.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopStartupCategories;