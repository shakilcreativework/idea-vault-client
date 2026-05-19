import ShareStartupIdea from "@/components/sections/ShareStartupIdea";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <div className="py-14">
      <Container>
        {/* section Why share your startup idea? */}
        <section>
          <ShareStartupIdea />
        </section>
      </Container>
    </div>
  );
}
