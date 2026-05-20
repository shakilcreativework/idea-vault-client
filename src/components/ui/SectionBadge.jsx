import { cn } from "@/lib/utils";


const SectionBadge = ({icon, text, className, iconClass}) => {
    return (
        <div>
            <h4 className={cn("font-medium text-sm text-[#6445df] flex gap-2 items-center", className)}><span className={cn(iconClass)}>{icon && icon}</span> {text}</h4>
        </div>
    );
};

export default SectionBadge;