import Container from "@/components/shared/Container";
import IdeaCard from "@/components/ui/IdeaCard";
import { getIdeasData } from "@/lib/actions";

const IdeasPage = async () => {
    const ideasData = await getIdeasData();
    console.log(ideasData);
    return (
        <div className="py-14">
            <Container>
                <div>
                    <div>

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