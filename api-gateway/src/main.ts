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

const DEFAULT_PORT = 4000;
const DEFAULT_SWAGGER_PREFIX = '/docs';

async function bootstrap() {
  const fastifyInstance = fastify({
    ignoreTrailingSlash: true,
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(fastifyInstance),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  setupSwagger(app, process.env.SWAGGER_PREFIX || DEFAULT_SWAGGER_PREFIX);
  app.register(compression);

  await app.listen(process.env.PORT || DEFAULT_PORT, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
