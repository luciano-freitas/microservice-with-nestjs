import { NestFactory } from '@nestjs/core';
import { RmqOptions } from '@nestjs/microservices';

import { ConfigService } from './config/config.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    new ConfigService().get('playerService') as RmqOptions,
  );

  await app.listen();
}
bootstrap();
