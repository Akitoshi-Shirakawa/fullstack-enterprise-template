"use client";

import * as React from "react";

/**
 * ボタンコンポーネントに渡せるプロパティ (型定義)
 */
export interface ButtonProps {
  children: React.ReactNode; // ボタンの中に表示するテキストや要素
  onClick?: () => void;      // クリック時に実行される関数 (任意)
  className?: string;        // 外部から追加で適用するCSSクラス名 (任意)
}

/**
 * プロジェクト全体で使い回す共通ボタンコンポーネント
 */
export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      // Tailwind CSS を使用したスタイリング
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};
