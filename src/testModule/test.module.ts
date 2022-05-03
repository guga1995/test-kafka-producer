
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TestService } from './test.service';

@Module({
  providers: [TestService],
  exports: [TestService],
})
export class TestModule {}