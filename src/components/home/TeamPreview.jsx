import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import FounderGrid from "../team/FounderGrid";
import { founders } from "../../data/founders";

export default function TeamPreview() {
  return (
    <section className="section-pad border-t border-border">
      <Container>
        <SectionHeading
          eyebrow="Founding team"
          title="Four founders, one team."
          description="Deltivex is built and run by its founders directly — no layer between the people who scope the work and the people who ship it."
        />
        <div className="mt-12">
          <FounderGrid founders={founders} />
        </div>
      </Container>
    </section>
  );
}
