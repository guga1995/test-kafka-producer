import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { emitKafkaEvent } from './emit-kafka-event.command'

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(
    AppModule,
  );

  const command = process.argv[2];

  const map = {
    'emit-kafka-event': emitKafkaEvent
  }

  if (map[command]) {
    map[command](app)
    await app.close();
    process.exit(0);
  } else {
    console.log('Command not found');
    process.exit(1);
  }

}

bootstrap();