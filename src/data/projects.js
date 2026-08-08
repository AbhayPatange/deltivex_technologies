// NOTE: GitHub / live demo links are placeholders ("#") until real URLs are provided.
// Replace them here — components read from this file, nothing is hardcoded downstream.

export const projects = [
  {
    slug: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    type: "Personal Project",
    tagline: "AI-assisted resume review, tailored against a real job description.",
    cover: "resume-analyzer",
    problem:
      "Job seekers rarely get concrete feedback on their resume before it reaches an ATS or a recruiter. Generic advice doesn't account for the specific role being applied to.",
    solution:
      "A tool that reads a resume alongside a target job description and returns structured, specific feedback — keyword gaps, formatting issues, and phrasing suggestions — rather than generic tips.",
    features: [
      "Resume parsing from PDF / DOCX",
      "Job-description-aware keyword gap analysis",
      "ATS-compatibility checks",
      "Actionable, section-by-section feedback",
    ],
    technologies: ["Python", "React", "OpenAI API", "ReportLab"],
    github: "#",
    demo: "#",
  },
  {
    slug: "job-platform",
    name: "Job Platform",
    type: "Internal Project",
    tagline: "A full-stack job board built to explore end-to-end product architecture.",
    cover: "job-platform",
    problem:
      "Most take-home job platform builds stop at a CRUD demo. We wanted to build something closer to a real product — with search, filtering, and a genuine application flow.",
    solution:
      "A job board where companies post roles and candidates search, filter, and apply — built as a full-stack reference architecture for how Deltivex structures larger applications internally.",
    features: [
      "Role-based access for employers and candidates",
      "Search and filtering across listings",
      "Application tracking flow",
      "Responsive, production-style UI",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    slug: "ai-patient-advisor",
    name: "AI Patient Advisor",
    type: "Personal Project",
    tagline: "An assistant that helps patients understand symptoms and next steps.",
    cover: "ai-advisor",
    problem:
      "People often turn to unstructured web searches when trying to understand symptoms, which can be confusing or misleading without any triage structure.",
    solution:
      "A conversational assistant that asks structured follow-up questions about symptoms and returns general guidance and possible next steps — clearly framed as informational, not a diagnosis.",
    features: [
      "Structured symptom intake conversation",
      "Context-aware follow-up questioning",
      "Clear non-diagnostic framing throughout",
      "Session summary for a follow-up doctor visit",
    ],
    technologies: ["Python", "LangChain", "React", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
];
