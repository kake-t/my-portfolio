export interface WorkExperience {
    companyName: string;
    position: string;
    period: string;
    description: string;
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

export interface ProfileData {
    name: string;
    title: string;
    profileImage: string;
    socialLinks: SocialLink[];
}
