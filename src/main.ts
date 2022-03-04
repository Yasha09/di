import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  console.log('hello');
  await app.listen(3000);
}

bootstrap();
