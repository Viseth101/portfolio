import type { Experience, Project, Skill } from "@/types";

export const projects: Project[] = [
  {
    id: "threatwatch",
    title: "ThreatWatch",
    description:
      "AI-powered threat intelligence dashboard for real-time cybersecurity monitoring",
    longDescription:
      "ThreatWatch is a full-stack cybersecurity platform that aggregates live CVE data from the National Vulnerability Database, uses Google Gemini AI to generate plain-English threat summaries, and provides threat actor profiles in a real-time dashboard. Built to simulate what a SOC analyst would need in a production environment.",
    tech: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Google Gemini API",
      "JWT Auth",
      "Vercel",
      "Render",
    ],
    features: [
      "Live CVE data aggregation from NVD",
      "AI-generated threat summaries via Gemini",
      "Threat actor profiles database",
      "JWT authentication with admin dashboard",
      "PDF report generation",
      "Mobile responsive design",
    ],
    githubUrl: "https://github.com/Viseth101/threatwatch",
    liveUrl: "https://threatwatch-demo.vercel.app",
    status: "live",
  },
  {
    id: "coming-soon-1",
    title: "Coming Soon",
    description: "A new full-stack project is in progress.",
    longDescription:
      "This slot will be replaced with a fully documented project once development is complete.",
    tech: ["TBD"],
    features: ["Planned"],
    githubUrl: "#",
    liveUrl: "#",
    status: "coming-soon",
  },
  {
    id: "coming-soon-2",
    title: "Coming Soon",
    description: "Another portfolio project is currently under development.",
    longDescription:
      "This placeholder keeps layout consistency until the next project is ready to publish.",
    tech: ["TBD"],
    features: ["Planned"],
    githubUrl: "#",
    liveUrl: "#",
    status: "coming-soon",
  },
];

export const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "Google Gemini API", category: "AI/ML" },
  { name: "Prompt Engineering", category: "AI/ML" },
  { name: "Model Evaluation", category: "AI/ML" },
  { name: "Network Security", category: "Security" },
  { name: "Threat Intelligence", category: "Security" },
  { name: "JWT Authentication", category: "Security" },
  { name: "GitHub Actions", category: "Tools & DevOps" },
  { name: "Docker", category: "Tools & DevOps" },
  { name: "Vercel", category: "Tools & DevOps" },
  { name: "Render", category: "Tools & DevOps" },
];

export const experiences: Experience[] = [
  {
    title: "Bachelor of Computer Science",
    org: "University (Your School Name)",
    date: "2022 - Present",
    description:
      "Focused on software engineering, cybersecurity, and applied AI through coursework and project-based learning.",
    type: "education",
  },
];