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
        technologies: ["Python", "AWS", "Docker", "PostgreSQL"],
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
    {
        projectName: "車両の交差点接近通知システム(ph6~ph7)",
        period: "2023年1月 - 2024年9月",
        description: "既存AndroidアプリのiOS版対応",
        tasks: [
            "iOSアプリ開発・テスト",
            "ダミーデータ送信ツール開発・テスト",
            "サーバ負荷試験ツール開発",
            "ログデータ解析・分析ツール開発",
        ],
        technologies: ["Swift", "iOS", "Python", "FastAPI", "MQTT", "Docker"],
    },
    {
        projectName: "複数案件のヘルプ",
        period: "2022年10月 - 2023年1月",
        description:
            "P4テストベッド構築支援, モビリティシュミレータ調査・カスタマイズ",
        tasks: ["P4に関する調査", "モビリティシュミレータの機能調査"],
        technologies: ["P4", "Veins", "SUMO"],
    },
    {
        projectName: "超低遅延モバイル通信試験",
        period: "2022年7月 - 2022年9月",
        description: "5G通信シュミレータ試験で使用するツールの開発",
        tasks: ["Pythonツールの開発・テスト"],
        technologies: ["Python", "free5gc", "UERANSIM"],
    },
    {
        projectName: "2022年6月以前",
        period: "以前 - 2022年6月",
        description: "官公庁案件, 配送管理システム案件 等",
        tasks: ["要件定義～結合テストまで経験"],
        technologies: ["Java", "Struts", "Python", "Django"],
    },
];
