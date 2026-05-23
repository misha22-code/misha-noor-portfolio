export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  tags: string[];
  stats: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  imageUrl?: string;
  videoUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon from Lucide
  detailedPoints: string[];
  techStack: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  bullets: string[];
  skillsUtilized: string[];
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Proficient';
    iconName?: string;
  }[];
}
