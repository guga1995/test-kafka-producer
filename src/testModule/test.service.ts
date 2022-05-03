
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { PhoneNumberChangedEvent } from '../phone-number-changed.event';

const avro = require('avro-js')

var type = avro.parse({
  name: 'UserInfo',
  type: 'record',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'phoneNumber', type: 'string' }
  ]
});

@Injectable()
export class TestService {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly usersClient: ClientKafka,
  ) { }

  getHello(): string {

    var user = { id: 1556551, phoneNumber: '555123456' };

    var buf = type.toBuffer(user);

    console.log(buf)

    let data = this.usersClient.emit(
      'phone_number_changed',
      buf,
      // new PhoneNumberChangedEvent(1, '5648145245')
    );
    return 'Hello World!';
  }
}