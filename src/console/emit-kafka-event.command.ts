import { INestApplicationContext } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { PhoneNumberChangedEvent } from "../phone-number-changed.event";

export function emitKafkaEvent(app: INestApplicationContext) {

    const kafkaService = <ClientKafka>app.get('KAFKA_SERVICE')

    let res = kafkaService.emit(
        'phone_number_changed',
        new PhoneNumberChangedEvent(1, '5648145245')
    );
    console.log(res)
}