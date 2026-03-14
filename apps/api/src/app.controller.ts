import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * HTTPリクエストの入り口となるコントローラー
 * ここで URL と処理の紐付け（ルーティング）を行います。
 */
@Controller()
export class AppController {
  // コンストラクタで AppService を注入（Dependency Injection）
  constructor(private readonly appService: AppService) {}

  /**
   * GET /users へのリクエストを処理
   */
  @Get('users')
  getUsers() {
    // 実際の処理は Service クラスに任せる
    return this.appService.getUsers();
  }
}
