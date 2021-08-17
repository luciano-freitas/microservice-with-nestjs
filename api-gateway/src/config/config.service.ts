import { Transport } from '@nestjs/microservices';

const URL = 'amqp://guest:guest@localhost:5672/nestmicroservice';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};
    this.envConfig.port = process.env.API_GATEWAY_PORT;
    this.envConfig.playerService = {
      options: {
        urls: [URL],
        queue: 'player_queue',
      },
      transport: Transport.RMQ,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
