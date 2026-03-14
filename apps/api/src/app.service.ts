import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * ビジネスロジックを記述するサービス
 * データベースへのアクセスや計算などはここで行います。
 */
@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  /**
   * データベースから全ユーザーを取得する
   */
  getUsers() {
    // Prisma を使用して User テーブルからデータを取得
    return this.prisma.user.findMany();
  }
}
