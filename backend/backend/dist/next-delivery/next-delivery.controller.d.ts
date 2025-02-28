import { NextDeliveryService } from './next-delivery.service';
export declare class NextDeliveryController {
    private readonly nextDeliveryService;
    constructor(nextDeliveryService: NextDeliveryService);
    findOne(id: string): any;
}
