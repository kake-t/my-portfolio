import { WorkExperience } from "@/types";

export const careerData: WorkExperience[] = [
    {
        projectName: "車両の交差点接近通知システム",
        position: "バックエンドエンジニア",
        period: "2024年12月 - 現在",
        description:
            "通信システムのバックエンド開発を担当。マイクロサービスアーキテクチャの設計と実装、APIの開発を行う。",
        technologies: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "Kubernetes",
        ],
    },
    {
        projectName: "ECサイトリプレイス案件",
        position: "フルスタックエンジニア",
        period: "2020 - 2022",
        description:
            "既存のECサイトのモダン化プロジェクトに参画。フロントエンド、バックエンドの両方の開発を担当。",
        technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
    },
];
