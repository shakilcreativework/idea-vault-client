import { IoArrowForward } from "react-icons/io5";
import BaseButton from "../ui/BaseButton";
import SectionTitle from "../ui/SectionTitle";
import SectionBadge from "../ui/SectionBadge";
import { BsStars } from "react-icons/bs";
import IdeaCard from "../ui/IdeaCard";


const TrendingIdeas = () => {
    return (
        <div className="py-20">
            <div className="space-y-3">
                <SectionBadge text={'Trending now'} icon={<BsStars />} />
                <div className="flex justify-between tems-center">
                    <SectionTitle text={'Ideas the community is talking about'} />
                    <BaseButton className={'hidden sm:block'} text={'Browse all'} size="sm" variant="ghost" rightIcon={<IoArrowForward />} />
                </div>
            </div>
            {/* trending cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-6 mt-10">
                <IdeaCard />
                <IdeaCard />
                <IdeaCard />
                <IdeaCard />
                <IdeaCard />
                <IdeaCard />
            </div>
        </div>
    );
};

export default TrendingIdeas;