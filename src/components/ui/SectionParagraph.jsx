import { cn } from "@/lib/utils";


const SectionParagraph = ({para, className}) => {
    return (
        <div>
            <p className={cn("text-sm md:text-base text-[#9badd8]", className)}>{para}</p>
        </div>
    );
};

export default SectionParagraph;