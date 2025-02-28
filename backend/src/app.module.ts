import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NextDeliveryModule } from './next-delivery/next-delivery.module';

@Module({
  imports: [NextDeliveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
