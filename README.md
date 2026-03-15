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

## 🛠 トラブルシューティング & 開発ガイドライン

### CI 環境でのビルドエラー (SWC Binary)
GitHub Actions などの Linux 環境で Next.js のビルド (`next build`) を行う際、SWC バイナリの読み込みに失敗する場合があります。
このプロジェクトでは、安定性を優先して **Babel (`.babelrc`)** を使用するように設定しています。
将来的に SWC に戻す場合は、`.babelrc` を削除し、環境に合った SWC バイナリを `package-lock.json` に含める必要があります。

### クライアントコンポーネントの明示
Next.js の App Router を使用しているため、コンポーネントはデフォルトでサーバーコンポーネントです。
`onClick` や `useState` などのインタラクティブな機能を使用する場合は、ファイルの先頭に必ず `"use client";` を記述してください。
（例: `apps/web/src/app/page.tsx`, `packages/ui/src/button.tsx`）

### ESLint 設定の安定化 (@rushstack/eslint-patch)
モノレポ構成では、共有設定ファイル（`packages/eslint-config`）が依存するプラグインが各アプリから参照できない問題が発生しやすいため、`@rushstack/eslint-patch` を導入しています。
これにより、共有設定と同じ階層にインストールされたプラグインが自動的に各アプリへ適用されます。

### 依存関係のバージョン固定
`eslint-config-next` などのパッケージは、本体（ESLint や Next.js）のメジャーバージョンに強く依存します。脆弱性修正のために `npm audit fix --force` を実行すると、これらのバージョンが不整合を起こし、ビルドや Lint が失敗する可能性があるため、主要なパッケージのバージョンは慎重に管理してください。

---

*Senior Software Engineer / Architect - Portfolio Project*
