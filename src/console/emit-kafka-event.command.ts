import { INestApplicationContext } from "@nestjs/common";

export function emitKafkaEvent (app: INestApplicationContext) {
    console.log('test')
}