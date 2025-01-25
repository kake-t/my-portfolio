import { WorkExperience } from "@/types";

export const careerData: WorkExperience[] = [
    {
        projectName: "車両の交差点接近通知システム(Phase8)",
        period: "2024年12月 - 現在",
        description:
            "既存システム(AWS EC2)からAWSサーバレスアーキテクチャへの移行対応",
        technologies: ["Python", "AWS", "Docker"],
    },
    {
        projectName: "テレメトリデータ収集システム",
        period: "2024年10月 - 2024年11月",
        description: "InfluxDBからVictoriaMetricsへの移行対応",
        technologies: ["Go", "VictoriaMetrics", "Docker"],
    },
];
