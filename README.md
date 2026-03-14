# Fullstack Enterprise Template (Monorepo)

このプロジェクトは、大規模開発に耐えうる堅牢なフルスタックアプリケーションの設計思想を具現化したリポジトリです。
型安全性、メンテナンス性、テスト容易性、そして拡張性を最優先事項として設計されています。

## 🏗 アーキテクチャの概要

- **Monorepo (Turborepo)**: 複数のアプリケーションと共有パッケージを一元管理。
- **Modular Monolith**: 疎結合なモジュール設計により、将来的なマイクロサービス化への柔軟性を確保。
- **Domain Driven Design (DDD) & Clean Architecture**: ビジネスロジックをフレームワークから分離し、長期的な保守性を向上。

## 🛠 技術スタック

### Frontend
- **Next.js (App Router)**: 最新の React フレームワークによる高いパフォーマンスと開発効率。
- **Tailwind CSS + shadcn/ui**: 一貫性のある UI コンポーネント設計。
- **Zod / Hook Form**: 堅牢なバリデーションとフォーム管理。

### Backend
- **NestJS**: 構造化された Node.js サーバーサイドフレームワーク。
- **Prisma**: 型安全な ORM による効率的なデータベース操作。
- **PostgreSQL**: 信頼性の高いリレーショナルデータベース。

### DevOps & QA
- **Docker / Docker Compose**: 環境に依存しない一貫した開発・実行環境。
- **Vitest**: 高速なユニットテスト・統合テスト。
- **Playwright**: 信頼性の高い E2E テスト。
- **GitHub Actions**: 自動化された CI/CD パイプライン。

## 📁 ディレクトリ構造

```text
.
├── apps/               # アプリケーション本体
│   ├── web/            # Next.js Frontend
│   └── api/            # NestJS Backend
├── packages/           # 共有パッケージ
│   ├── ui/             # 共有 UI コンポーネント (shadcn/ui ベース)
│   ├── types/          # 共通型定義・DTO (Zod)
│   ├── database/       # Prisma スキーマ & クライアント
│   └── config/         # 共通設定 (eslint, tailwind, tsconfig)
├── docker/             # Docker 関連ファイル
└── docs/               # 設計ドキュメント (ADR, API Spec)
```

## 🚀 開発の始め方

1. **リポジトリのクローン**
2. **依存関係のインストール**
   ```bash
   npm install
   ```
3. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

---

*Senior Software Engineer / Architect - Portfolio Project*
