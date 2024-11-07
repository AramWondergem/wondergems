export interface Skill {
    name: string;
    level: number;
}

export interface SkillsSection {
    title: string;
    skills: Skill[];
}

export interface Experience {
    title: string;
    company: string;
    location: string;
    introduction: string;
    achievements: string[];
}

export interface Degree {
    university: string;
    degreeType: string;
    name: string;
    description: string[];
}

export interface TimeLineElement<T> {
    entity: T;
    timePeriod: string;
}

export interface AboutData {
    introduction: string;
    skillsSections: SkillsSection[];
    experiences: TimeLineElement<Experience>[];
    degrees: TimeLineElement<Degree>[];
}
