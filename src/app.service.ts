
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { PhoneNumberChangedEvent } from './phone-number-changed.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly usersClient: ClientKafka,
  ) {}

  getHello(): string {
    let data = this.usersClient.emit(
      'phone_number_changed',
      new PhoneNumberChangedEvent(1, '5648145245')
    );
    return 'Hello World!';
  }
}