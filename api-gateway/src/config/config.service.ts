import { Transport } from '@nestjs/microservices';

const USER = process.env.RMQ_USER || 'guest';
const PASSWORD = process.env.RMQ_PASSWORD || 'guest';
const HOST = process.env.RMQ_HOST || 'rmq';
const PORT = process.env.RMQ_PORT || '5672';
const VHOST_NAME = process.env.RMQ_VHOST_NAME || 'microservice';

const URL = `amqp://${USER}:${PASSWORD}@${HOST}:${PORT}/${VHOST_NAME}`;

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
    this.envConfig.teamService = {
      options: {
        port: process.env.TEAMS_PORT,
        host: process.env.TEAMS_HOST,
      },
      transport: Transport.TCP,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
