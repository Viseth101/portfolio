// ============================================
// PORTFOLIO DATA — Edit this file to update
// your portfolio content without touching
// any other files.
// ============================================

import { Project, Skill, Experience, SiteConfig } from "@/types";

// ============================================
// SITE CONFIG
// Edit these values to update your personal
// info across the whole site.
// ============================================
export const siteConfig: SiteConfig = {
  name: "Udtarakviseth Lay",
  firstName: "Udtarakviseth",
  lastName: "Lay",
  email: "udtarakvisethlay@gmail.com",
  github: "https://github.com/Viseth101",
  linkedin:
    "https://www.linkedin.com/in/udtarakviseth-lay-774858373/",
  resumeUrl: "/resume.pdf",
  university: "Silapakorn University",
  // Set this to false to hide the "Open to internships" badge
  openToWork: true,
  lookingFor: "Summer 2026 internships",
  roles: [
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Cybersecurity Enthusiast",
    "Open Source Builder",
  ],
};

// ============================================
// PROJECTS
// To add a new project: copy one of the
// objects below and fill in your details.
// To hide a project: set status to
// "coming-soon"
// ============================================
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
    type: "featured",
    challenges:
      "The hardest part was getting the FastAPI backend and Next.js frontend to communicate correctly across different deployment platforms (Render and Vercel). I learned how to handle CORS properly and manage JWT tokens between a separate frontend and backend. Integrating the Gemini API also required careful prompt engineering to get consistent structured output.",
  },
  {
    id: "silapakorn-wc-map",
    title: "Silapakorn Sanam Chan WC Map",
    description:
      "Interactive campus map for locating restrooms across Silapakorn University's Sanam Chan campus",
    longDescription:
      "A full-stack web application built as a course project to solve a real campus navigation problem. Students and visitors can view an interactive Google Maps interface pinpointing every restroom location across the Sanam Chan campus, complete with photos of each facility uploaded via Cloudinary.",
    tech: [
      "Node.js",
      "Express",
      "Google Maps API",
      "MySQL",
      "Railway",
      "Cloudinary",
      "Vanilla JS",
      "CSS",
    ],
    features: [
      "Interactive Google Maps with custom restroom markers",
      "Photo previews for each facility via Cloudinary",
      "Cloud MySQL database hosted on Railway",
      "REST API backend with Node.js and Express",
      "Mobile responsive for on-campus use",
    ],
    githubUrl: "https://github.com/Viseth101/silpakorn-wc-map",
    liveUrl: "https://wcsu.up.railway.app",
    status: "live",
    type: "course",
    challenges:
      "Managing image uploads through Cloudinary while keeping the MySQL database in sync was trickier than expected. I also learned how to work with the Google Maps API markers and handle the async loading of location data without the map breaking. Deploying a Node.js backend on Railway taught me how environment variables work in production.",
  },
  {
    id: "coming-soon-1",
    title: "Next Project",
    description: "Something new is in progress",
    longDescription: "",
    tech: [],
    features: [],
    githubUrl: "",
    liveUrl: "",
    status: "coming-soon",
    type: "personal",
    challenges: "",
  },
];

// ============================================
// SKILLS
// To add a skill: add a new object below.
// proficiency: "proficient" or "learning"
// ============================================
export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", category: "Frontend", proficiency: "proficient" },
  { name: "React", category: "Frontend", proficiency: "proficient" },
  { name: "TypeScript", category: "Frontend", proficiency: "proficient" },
  { name: "Tailwind CSS", category: "Frontend", proficiency: "proficient" },
  { name: "HTML & CSS", category: "Frontend", proficiency: "proficient" },
  // Backend
  { name: "FastAPI", category: "Backend", proficiency: "proficient" },
  { name: "Node.js", category: "Backend", proficiency: "proficient" },
  { name: "PostgreSQL", category: "Backend", proficiency: "proficient" },
  { name: "MySQL", category: "Backend", proficiency: "proficient" },
  { name: "REST APIs", category: "Backend", proficiency: "proficient" },
  // AI/ML
  { name: "Python", category: "AI/ML", proficiency: "proficient" },
  {
    name: "Google Gemini API",
    category: "AI/ML",
    proficiency: "proficient",
  },
  { name: "LangChain", category: "AI/ML", proficiency: "learning" },
  { name: "Scikit-learn", category: "AI/ML", proficiency: "learning" },
  {
    name: "Prompt Engineering",
    category: "AI/ML",
    proficiency: "proficient",
  },
  // Security
  { name: "CVE Analysis", category: "Security", proficiency: "proficient" },
  { name: "JWT Auth", category: "Security", proficiency: "proficient" },
  { name: "OWASP", category: "Security", proficiency: "learning" },
  {
    name: "Penetration Testing",
    category: "Security",
    proficiency: "learning",
  },
  // Tools
  {
    name: "Git & GitHub",
    category: "Tools & DevOps",
    proficiency: "proficient",
  },
  { name: "Vercel", category: "Tools & DevOps", proficiency: "proficient" },
  { name: "Railway", category: "Tools & DevOps", proficiency: "proficient" },
  { name: "Docker", category: "Tools & DevOps", proficiency: "learning" },
  { name: "Linux", category: "Tools & DevOps", proficiency: "proficient" },
];

// ============================================
// EXPERIENCE & EDUCATION
// To add an entry: copy one object and edit.
// type: "education" | "work" | "project"
// Leave endDate empty for current/present.
// ============================================
export const experiences: Experience[] = [
  {
    title: "Bachelor of Science in Computer Science",
    org: "Silapakorn University",
    date: "2024 — Present",
    description:
      "Studying core CS fundamentals including data structures, algorithms, computer networks, and software engineering. Building real projects alongside coursework.",
    type: "education",
  },
  {
    title: "ThreatWatch — AI Threat Intelligence Dashboard",
    org: "Personal Project",
    date: "2026",
    description:
      "Built a full-stack cybersecurity platform with Next.js, FastAPI, and Google Gemini API. Features live CVE data, AI-generated threat summaries, and JWT authentication.",
    type: "project",
  },
  {
    title: "Silapakorn Sanam Chan WC Map",
    org: "Course Project — Silapakorn University",
    date: "2026",
    description:
      "Built an interactive campus map with Node.js, Express, Google Maps API, and MySQL. Deployed live with Cloudinary for image storage.",
    type: "project",
  },
  {
    title: "Internship — Coming Soon",
    org: "Open to opportunities",
    date: "Summer 2026",
    description:
      "Actively seeking internship roles in software engineering, AI, or cybersecurity.",
    type: "work",
  },
];