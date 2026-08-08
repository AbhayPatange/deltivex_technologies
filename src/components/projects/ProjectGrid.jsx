import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects }) {
  if (!projects.length) {
    return (
      <div className="border border-border p-12 text-center text-ink-soft">
        No projects to show yet.
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
