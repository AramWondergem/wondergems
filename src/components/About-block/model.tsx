export interface Skill {
    name: string;
    level: number;
}

export interface SkillsSection {
    title: string;
    skills: Skill[];
}

export interface Experience {
    timePeriod: string;
    title: string;
    company: string;
    location: string;
    introduction: string;
    achievements: string[];
}

export interface AboutData {
    introduction: string;
    skillsSections: SkillsSection[];
    experiences: Experience[];
}
