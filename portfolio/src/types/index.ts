export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  status: string;
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
}

export interface Experience {
  title: string;
  org: string;
  date: string;
  description: string;
  type: "education" | "work" | "project";
}