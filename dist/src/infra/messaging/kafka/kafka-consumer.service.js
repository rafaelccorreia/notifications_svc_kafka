"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaConsumerService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let KafkaConsumerService = class KafkaConsumerService extends microservices_1.ServerKafka {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['tops-coyote-6772-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'dG9wcy1jb3lvdGUtNjc3MiSVaHe_10HnuC4wmpG9CPH51vAdl8E4R-78jKpr_fg',
                    password: 'g8k1fVlj52pcBXfeBlEBsRfklEDMfTjpVyj5FJpM4jpFu_wuVq8eZ91WscS2SLJVkkjXYw=='
                },
                ssl: true
            }
        });
    }
    async onModuleDestroy() {
        await this.close();
    }
};
KafkaConsumerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], KafkaConsumerService);
exports.KafkaConsumerService = KafkaConsumerService;
//# sourceMappingURL=kafka-consumer.service.js.map