import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

/**
 * アプリケーション全体の構成を定義するルートモジュール
 */
@Module({
  imports: [], // 他のモジュール（DB接続、認証など）を組み込む場合に記述
  controllers: [AppController], // HTTPリクエストを受け取るクラスを登録
  providers: [AppService, PrismaService], // ビジネスロジックやDB操作を行うクラスを登録
})
export class AppModule {}
