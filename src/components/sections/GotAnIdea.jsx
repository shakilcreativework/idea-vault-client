import { GoArrowRight } from "react-icons/go";
import BaseButton from "../ui/BaseButton";
import SectionTitle from "../ui/SectionTitle";
import SectionParagraph from "../ui/SectionParagraph";

const GotAnIdea = () => {
    return (
        <div className="mb-28">
            <div className="flex flex-col sm:flex-row gap-5 p-6 md:p-14 justify-between items-center rounded-2xl bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]">
                <div className="space-y-2">
                    <SectionTitle className={'text-white'} text={'Got an idea worth sharing?'} />
                    <SectionParagraph className={'text-white'} para={'Post it in two minutes. Get feedback in days. Find collaborators before the week is out.'} />
                </div>
                <BaseButton text={'Share an idea'} as="link" href={'/add-idea'} rightIcon={<GoArrowRight />} className={'bg-[linear-gradient(135deg,oklch(0.97_0.03_280),oklch(0.97_0.04_220))] text-[#575ecf] rounded-xl'} />
            </div>
        </div>
    );
};

export default GotAnIdea;