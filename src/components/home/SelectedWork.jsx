import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import ProjectGrid from "../projects/ProjectGrid";
import { projects } from "../../data/projects";

export default function SelectedWork() {
  return (
    <section className="section-pad border-t border-border bg-bg-raised">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="A small, honest portfolio."
            description="We're a new team — this isn't a client list, it's the work we've actually built, labeled for exactly what it is."
          />
          <Button to="/work" variant="ghost" size="md" className="shrink-0">
            View all work
          </Button>
        </div>

        <div className="mt-14">
          <ProjectGrid projects={projects} />
        </div>
      </Container>
    </section>
  );
}
