import { WorkExperience } from "@/types";

export const careerData: WorkExperience[] = [
    {
        projectName: "車両の交差点接近通知システム(Phase8)",
        period: "2024年12月 - 現在",
        description:
            "既存システム(AWS EC2)からAWSサーバレスアーキテクチャへの移行対応",
        tasks: [
            "AWSサーバレスアーキテクチャの機能調査",
            "AWS LambdaとDockerを活用した開発フローの構築",
            "AWS Lambdaを用いた機能の設計・実装・テスト",
        ],
        technologies: ["Python", "AWS", "Docker"],
    },
    {
        projectName: "テレメトリデータ収集システム",
        period: "2024年10月 - 2024年11月",
        description:
            "メトリクスデータ保存用DBを、InfluxDBからVictoriaMetricsへの移行対応",
        tasks: [
            "InfluxDBからVictoriaMetricsに変更可能か調査",
            "メトリクスデータ収集システム(Go)のVictriaMetrics対応",
            "GrafanaダッシュボードのVictriaMetrics移行対応",
        ],
        technologies: ["Go", "VictoriaMetrics", "Grafana", "Docker"],
    },
];
