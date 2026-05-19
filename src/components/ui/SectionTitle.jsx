import { cn } from "@/lib/utils";


const SectionTitle = ({text, className}) => {
    return (
        <div>
            <h2 className={cn("text-2xl md:text-3xl lg:text-4xl font-bold text-[#091123] plus-jakarta", className)}>{text}</h2>
        </div>
    );
};

export default SectionTitle;