import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { ServerKafka } from '@nestjs/microservices'

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['tops-coyote-6772-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dG9wcy1jb3lvdGUtNjc3MiSVaHe_10HnuC4wmpG9CPH51vAdl8E4R-78jKpr_fg',
          password:
            'g8k1fVlj52pcBXfeBlEBsRfklEDMfTjpVyj5FJpM4jpFu_wuVq8eZ91WscS2SLJVkkjXYw=='
        },
        ssl: true
      }
    })
  }
  async onModuleDestroy() {
    await this.close()
  }
}
