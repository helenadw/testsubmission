import { Controller, Get, Param } from '@nestjs/common';
import { NextDeliveryService } from './next-delivery.service';

@Controller('comms/your-next-delivery')
export class NextDeliveryController {
  constructor(private readonly nextDeliveryService: NextDeliveryService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nextDeliveryService.findOne(id);
  }
}
