import { Module } from '@nestjs/common';
import { NextDeliveryController } from './next-delivery.controller';
import { NextDeliveryService } from './next-delivery.service';

@Module({
  controllers: [NextDeliveryController],
  providers: [NextDeliveryService],
})
export class NextDeliveryModule {}
