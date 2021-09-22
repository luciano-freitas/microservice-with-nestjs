import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastify from 'fastify';
import { useContainer } from 'class-validator';
import compression from 'fastify-compress';
import { setupSwagger } from './setupSwagger';
import helmet from 'fastify-helmet';
import { ValidationPipe } from '@nestjs/common';

const IP = process.env.API_GATEWAY_IP || '0.0.0.0';
const PORT = process.env.API_GATEWAY_PORT || 4000;
const SWAGGER_PREFIX = process.env.API_GATEWAY_SWAGGER_PREFIX || '/doc';

async function bootstrap() {
  const fastifyInstance = fastify({
    ignoreTrailingSlash: true,
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(fastifyInstance),
  );

  setupSwagger(app, SWAGGER_PREFIX);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidUnknownValues: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.register(compression);
  app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  });

  await app.listen(PORT, IP);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
