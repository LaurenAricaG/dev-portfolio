export interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  duration?: string;
  location?: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
  logo: string;
  accentColor: string;
  responsibilities: string[];
  technologies: string[];
  current?: boolean;
  websiteUrl: string;
  certificateUrl: string;
}
