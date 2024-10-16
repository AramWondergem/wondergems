export enum ImageType {
    MOBILE = 'MOBILE',
    DESKTOP = 'DESKTOP'
}

export interface ProjectImage {
    type: ImageType;
    url: string;
    alt: string;
}

export interface ProjectButton {
    label: string;
    url: string;
}

export interface ProjectData {
    title: string;
    images: ProjectImage[];
    description: string;
    tasks: string[];
    technologies: string;
    buttons: ProjectButton[];
}
