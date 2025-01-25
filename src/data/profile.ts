import { ProfileData } from "@/types";
import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

const bioText = `業界歴7年目、要件定義から結合テストまで一通りの経験があります。
直近案件では、Pythonでツール開発を多くしていたため、実装に自信があります。
新しい技術に触るのが好きで、触ったことがない技術でもキャッチアップしていくことが得意です。`;

export const profileData: ProfileData = {
    name: "kake",
    title: "Backend Developer",
    profileImage: `${BASE_PATH}/icons/self_portrait_oil_painting.jpg`,
    socialLinks: [
        { platform: "github", url: "https://github.com/kake-t" },
        { platform: "zenn", url: "https://zenn.dev/kake99" },
    ],
    bio: bioText,
    certifications: [
        {
            name: "Oracle Certified Java Programmer, Silver SE 8",
            acquiredDate: "2019年7月",
            organization: "Oracle",
        },
        {
            name: "基本情報技術者試験",
            acquiredDate: "2024年10月",
            organization: "IPA",
        },
    ],
};
