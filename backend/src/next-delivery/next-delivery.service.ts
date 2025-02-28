import { Injectable, NotFoundException } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class NextDeliveryService {
  private deliveries: any[];
  constructor() {
    try {
      const filePath = join(process.cwd(), 'data.json');
      const fileContent = readFileSync(filePath, 'utf-8');
      this.deliveries = JSON.parse(fileContent);
      console.info('Loaded deliveries data:', this.deliveries.length);
    } catch (error) {
      console.error('Error reading data file:', error);
      this.deliveries = [];
    }
  }

  findOne(id: string) {
    console.info(`Finding delivery with ID: ${id}`);
    const delivery = this.deliveries.find((item) => item.id === id);

    if (!delivery) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return delivery;
  }
}
