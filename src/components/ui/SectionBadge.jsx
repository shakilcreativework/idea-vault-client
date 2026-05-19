import { cn } from "@/lib/utils";


const SectionBadge = ({icon, text, className}) => {
    return (
        <div>
            <h4 className={cn("font-medium text-sm text-[#6445df]", className)}>{icon && icon} {text}</h4>
        </div>
    );
};

export default SectionBadge;