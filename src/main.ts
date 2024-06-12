import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port =
    process.env.NODE_ENV === 'development'
      ? parseInt(process.env.PORT) + 1
      : process.env.PORT;

  await app.listen(port || 3000);
}
bootstrap();
