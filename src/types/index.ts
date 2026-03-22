export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  status: "live" | "in-progress" | "coming-soon";
  type: "featured" | "course" | "personal";
  challenges: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "AI/ML" | "Security" | "Tools & DevOps";
  proficiency: "proficient" | "learning";
}

export interface Experience {
  title: string;
  org: string;
  date: string;
  description: string;
  type: "education" | "work" | "project";
}

export interface SiteConfig {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  university: string;
  openToWork: boolean;
  lookingFor: string;
  roles: string[];
}