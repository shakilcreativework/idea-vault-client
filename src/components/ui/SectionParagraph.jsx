import { cn } from "@/lib/utils";


const SectionParagraph = ({para, className}) => {
    return (
        <div>
            <p className={cn("text-sm md:text-base text-[#5b6375]", className)}>{para}</p>
        </div>
    );
};

export default SectionParagraph;