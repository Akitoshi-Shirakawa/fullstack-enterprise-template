import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * NestJS アプリケーションの起動（エントリーポイント）
 */
async function bootstrap() {
  // AppModule を元にアプリケーションインスタンスを作成
  const app = await NestFactory.create(AppModule);
  
  // フロントエンドからのリクエストを許可するための CORS を有効化
  app.enableCors();
  
  // 3001番ポートでサーバーを起動
  await app.listen(3001);
  console.warn(`Application is running on: http://localhost:3001`);
}

// 起動関数の実行
bootstrap();
