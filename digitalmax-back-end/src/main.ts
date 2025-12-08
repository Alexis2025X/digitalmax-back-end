import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cookieParser = require('cookie-parser');
  
  app.use(cookieParser());
  app.enableCors({
  //origin: "http://DROPLET_IP:5173", 
  origin: "https://sistema.digitalmax.cc", 
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization",
});
  app.useGlobalPipes(new ValidationPipe());
 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
