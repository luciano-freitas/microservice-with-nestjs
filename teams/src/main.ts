import { NestFactory } from '@nestjs/core';
import { TcpOptions, Transport } from '@nestjs/microservices';

import { ConfigService } from './config/config.service';
import { AppModule } from './app.module';
import ddbConfig from './config/ddb.config';

async function bootstrap() {
  ddbConfig.init();

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('port'),
    },
  } as TcpOptions);

  await app.listen();
}
bootstrap();
