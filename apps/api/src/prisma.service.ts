import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@repo/database';

/**
 * Prisma Client を NestJS で使いやすくするための共通サービス
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  /**
   * モジュールが初期化されるときにデータベースへ接続
   */
  async onModuleInit() {
    await this.$connect();
  }
}
