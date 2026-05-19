
import SectionTitle from "../ui/SectionTitle";
import { LuLightbulb, LuMessagesSquare, LuUsers } from "react-icons/lu";
import { GoRocket } from "react-icons/go";


const ShareStartupIdea = () => {
    return (
        <div>
            <div className="space-y-3 text-center">
                <SectionTitle text={'Why share your startup idea?'} />
                <p className="text-sm md:text-base text-[#5b6375]">The best founders test ideas in the open. IdeaVault gives you the audience, the tools, <br className="hidden md:block" /> and the community to do it well.</p>
            </div>

            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 lg:gap-6 mt-14">
                <div className="border p-8 rounded-xl space-y-5 bg-white">
                    <div className=" rounded-xl text-white flex justify-center items-center w-12 h-12 bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]">
                        <LuLightbulb className="text-xl" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-[#091123] text-lg plus-jakarta font-bold">Validate faster</h3>
                        <p className="text-[#5b6375] text-sm">Get honest feedback from operators before you write a single line of code.</p>
                    </div>
                </div>
                <div className="border p-8 rounded-xl space-y-5 bg-white">
                    <div className=" rounded-xl text-white flex justify-center items-center w-12 h-12 bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]">
                        <LuUsers className="text-xl" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-[#091123] text-lg plus-jakarta font-bold">Find collaborators</h3>
                        <p className="text-[#5b6375] text-sm">Co-founders, designers and engineers who care about the problem you&apos;re solving.</p>
                    </div>
                </div>
                <div className="border p-8 rounded-xl space-y-5 bg-white">
                    <div className=" rounded-xl text-white flex justify-center items-center w-12 h-12 bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]">
                        <LuMessagesSquare className="text-xl" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-[#091123] text-lg plus-jakarta font-bold">Refine in public</h3>
                        <p className="text-[#5b6375] text-sm">Iterate openly with a community that wants you to succeed.</p>
                    </div>
                </div>
                <div className="border p-8 rounded-xl space-y-5 bg-white">
                    <div className=" rounded-xl text-white flex justify-center items-center w-12 h-12 bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]">
                        <GoRocket className="text-xl" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-[#091123] text-lg plus-jakarta font-bold">Ship the right thing</h3>
                        <p className="text-[#5b6375] text-sm">Spot patterns across thousands of ideas and bet on what actually matters.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareStartupIdea;