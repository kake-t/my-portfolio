export interface WorkExperience {
    projectName: string;
    period: string;
    description: string;
    tasks: string[];
    technologies: string[];
}

export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    link: string;
}

export interface SocialLink {
    platform: "github" | "zenn";
    url: string;
}

export interface Certification {
    name: string;
    acquiredDate: string;
    organization: string;
}

export interface Skill {
    name: string;
    years: number;
}

export interface ProfileData {
    name: string;
    title: string;
    profileImage: string;
    socialLinks: SocialLink[];
    bio: string;
    certifications: Certification[];
    skills: Skill[];
}
