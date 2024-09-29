import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('API de Personajes de Star Wars')
    .setDescription('API para gestionar personajes de Star Wars')
    .setVersion('1.0')
    .addTag('people')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);


  await app.init();
  return app.getHttpAdapter().getInstance();
}

export const handler: Handler = async (event: APIGatewayEvent, context: Context,callback: Callback) => {
  if (!server) {
    server = await bootstrap();
  }
  return server(event, context,callback);
};
