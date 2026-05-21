
import Container from "@/components/shared/Container";
import IdeaCard from "@/components/ui/IdeaCard";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionParagraph from "@/components/ui/SectionParagraph";
import SectionTitle from "@/components/ui/SectionTitle";
import { getIdeasData } from "@/lib/actions";
import { GoBrowser } from "react-icons/go";

const IdeasPage = async () => {
    const ideasData = await getIdeasData();
    // console.log(ideasData);
    return (
        <div className="py-14">
            <Container>
                <div>
                    <div className="space-y-3">
                        <SectionBadge text={'Browse the vault'} icon={<GoBrowser className="text-lg" />} />
                        <div className="space-y-2">
                            <SectionTitle text={'All startup ideas'} />
                            <SectionParagraph para={'Search by title, filter by category, and find ideas worth building on.'} />
                        </div>
                    </div>


                    
                    {/* ideas show */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-6 mt-10">
                        {
                            ideasData.map((ideaInfo, idx) => <IdeaCard key={idx} ideaInfo={ideaInfo} />)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default IdeasPage;