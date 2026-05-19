import ShareStartupIdea from "@/components/sections/ShareStartupIdea";
import TopStartupCategories from "@/components/sections/TopStartupCategories";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <div className="py-14">
      <Container>
        {/* section Why share your startup idea? */}
        <section>
          <ShareStartupIdea />
        </section>

        {/* section Top startup categories */}
        <section>
          <TopStartupCategories />
        </section>
      </Container>
    </div>
  );
}
