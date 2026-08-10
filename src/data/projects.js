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
    demo: "https://airesumeanalyzer-abhayproject.vercel.app/",
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
    demo: "https://jobportal-abhayproject.vercel.app/",
  },
  {
  slug: "odyssey-college-fest",
  name: "Odyssey College Fest Website",
  type: "College Project",
  tagline:
    "A real-time college fest platform for event registration, participant management, and QR-based verification.",

  cover: "odyssey",

  problem:
    "Managing college fest registrations and participant verification manually can be time-consuming and error-prone, especially when handling multiple events and large numbers of participants.",

  solution:
    "A centralized web platform for the Odyssey college fest that streamlined event registration and participant management using Firebase, with QR-code based verification to make on-site check-in faster and more reliable.",

  features: [
    "Online event registration and participant management",
    "Firebase-based real-time data and authentication",
    "QR-code based participant verification",
    "Event-wise registration and check-in flow",
    "Responsive college fest website",
  ],

  technologies: [
    "React",
    "Firebase",
    "QR Scanner",
    "HTML",
    "CSS",
    "JavaScript",
  ],

  github: "#",
  demo: "https://odyssey-jce.com/",
},
];
