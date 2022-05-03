import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

const mod = ClientsModule.register([
    {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId: 'users-producer',
                brokers: [
                    '192.168.41.193:9092',
                    '192.168.41.194:9092',
                    '192.168.41.195:9092',
                ],
            },
            consumer: {
                groupId: 'users-consumer',
            },
        },
    },
])

@Global()
@Module({
    imports: [
        mod,
    ],
    exports: [mod]
})
export class KafkaModule { }