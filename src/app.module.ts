
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { TestModule } from './testModule/test.module';
import {KafkaModule} from './kafka/kafka.module'

@Module({
  imports: [
    TestModule,
    KafkaModule
  ],
  controllers: [AppController],
})
export class AppModule {}
