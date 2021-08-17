/* istanbul ignore file */

import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  PROJECT_DESCRIPTION,
  PROJECT_NAME,
  PROJECT_VERSION,
} from './constants';

/**
 * Setup the Swagger (UI).
 *
 * @param app
 * @param path
 */
export const setupSwagger = (app: INestApplication, path: string) => {
  const options = new DocumentBuilder()
    .setTitle(PROJECT_NAME)
    .setDescription(PROJECT_DESCRIPTION)
    .setVersion(PROJECT_VERSION)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(path, app, document);
};
