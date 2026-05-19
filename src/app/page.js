import GotAnIdea from "@/components/sections/GotAnIdea";
import ShareStartupIdea from "@/components/sections/ShareStartupIdea";
import TopStartupCategories from "@/components/sections/TopStartupCategories";
import TrendingIdeas from "@/components/sections/TrendingIdeas";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <div className="py-14">
      <Container>
        {/* trending now Ideas the community is talking about */}
        <section>
          <TrendingIdeas />
        </section>

        {/* section Why share your startup idea? */}
        <section>
          <ShareStartupIdea />
        </section>

        {/* section Top startup categories */}
        <section>
          <TopStartupCategories />
        </section>

        {/* Got an idea worth sharing? */}
        <section>
          <GotAnIdea />
        </section>
      </Container>
    </div>
  );
}
