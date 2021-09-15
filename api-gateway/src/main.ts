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

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  setupSwagger(app, SWAGGER_PREFIX);
  app.register(compression);

  await app.listen(PORT, IP);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
