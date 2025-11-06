export interface DetailItem {
  label: string;
  content: string[];
}

export type ExperienceType = "education" | "experience";

export interface TimelineEntry {
  type: ExperienceType;
  title: string;
  institution: string;
  period: string;
  details: DetailItem[];
}

export interface TimelineCategory {
  type: ExperienceType;
  label: string;
}

export interface SkillItem {
  name: string;
  level: "1" | "2" | "3";
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface ContactItem {
  label: string;
}

export interface Contact {
  email: ContactItem;
  phone: ContactItem;
  location: ContactItem;
  linkedin?: ContactItem;
  github?: ContactItem;
}

export interface Language {
  name: string;
  level: string;
}

export interface SkillLevel {
  level: "1" | "2" | "3";
  label: string;
  description: string;
}

export interface SoftSkill {
  name: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: Contact;
  languages: Language[];
  skillLevels: SkillLevel[];
  timelineCategories: TimelineCategory[];
  timeline: TimelineEntry[];
  hardSkills: Skill[];
  coverLetter: {
    title: string;
    recipient: {
      name: string;
      company: string;
      address: {
        street: string;
        city: string;
        postalCode: string;
      };
    };
    date: string;
    greeting: string;
    mainText: string;
    closing: string;
  };
}
