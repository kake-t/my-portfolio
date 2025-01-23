import { ProfileData } from "@/types";
import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export const profileData: ProfileData = {
    name: "kake",
    title: "Backend Developer",
    profileImage: `${BASE_PATH}/icons/self_portrait_oil_painting.jpg`,
    socialLinks: [
        { platform: "github", url: "https://github.com/kake-t" },
        { platform: "zenn", url: "https://zenn.dev/kake99" },
    ],
};
