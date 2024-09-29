import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API de Personajes de Star Wars')
    .setDescription('API para gestionar personajes de Star Wars')
    .setVersion('1.0')
    .addTag('people')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.init();
  return app.getHttpAdapter().getInstance().handler;
}

export const handler = bootstrap().then(app => (event, context) => {
  return app(event, context);
});

