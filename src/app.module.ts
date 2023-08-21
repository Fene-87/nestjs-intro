import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [NinjasModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
