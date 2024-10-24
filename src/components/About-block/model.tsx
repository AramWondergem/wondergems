export interface Skill {
    name: string;
    level: number;
}

export interface SkillsSection {
    title: string;
    skills: Skill[];
}

export interface AboutData {
    introduction: string;
    skillsSections: SkillsSection[];
}
