import { WorkExperience } from "@/types";

export const careerData: WorkExperience[] = [
    {
        projectName: "車両の交差点接近通知システム(Phase8)",
        position: "バックエンドエンジニア",
        period: "2024年12月 - 現在",
        description: "既存システム(AWS EC2)をAWSサーバレスアーキテクチャに移行",
        technologies: ["Python", "AWS", "Docker"],
    },
    {
        projectName: "テレメトリデータ収集システム",
        position: "バックエンドエンジニア",
        period: "2024年10月 - 2024年11月",
        description: "InfluxDBからVictoriaMetricsへの移行対応",
        technologies: ["Go", "VictoriaMetrics", "Docker"],
    },
];
