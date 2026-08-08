import { useParams, Navigate, Link } from "react-router-dom";
import Container from "../components/common/Container";
import ProjectDetailsView from "../components/projects/ProjectDetails";
import CTA from "../components/home/CTA";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <>
      <section className="pt-36 pb-20 md:pt-44 md:pb-24">
        <Container>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-pink transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>
          <ProjectDetailsView project={project} />
        </Container>
      </section>
      <CTA />
    </>
  );
}
