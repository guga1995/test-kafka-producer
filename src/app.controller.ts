import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestService } from './testModule/test.service';

@Controller()
export class AppController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getHello(): string {
    return this.testService.getHello();
  }
}
