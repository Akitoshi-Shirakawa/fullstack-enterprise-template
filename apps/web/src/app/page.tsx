"use client";

import { Button } from "@repo/ui";

/**
 * トップページを表示する React コンポーネント
 */
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* 見出しと説明文 */}
      <h1 className="text-4xl font-bold mb-8">
        Enterprise Monorepo Template
      </h1>
      <p className="text-xl mb-8 text-gray-600">
        Next.js + NestJS + Turborepo
      </p>

      {/* 
        共有パッケージ (packages/ui) からインポートしたボタン。
        モノリポ構成により、複数のアプリで同じ部品を使い回せます。
      */}
      <Button onClick={() => alert("Shared Component Works!")}>
        Shared Button
      </Button>
    </main>
  );
}
