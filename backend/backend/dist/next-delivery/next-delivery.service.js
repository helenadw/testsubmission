"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextDeliveryService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
let NextDeliveryService = class NextDeliveryService {
    constructor() {
        try {
            const filePath = (0, path_1.join)(process.cwd(), 'data.json');
            const fileContent = (0, fs_1.readFileSync)(filePath, 'utf-8');
            this.deliveries = JSON.parse(fileContent);
            console.info('Loaded deliveries data:', this.deliveries.length);
        }
        catch (error) {
            console.error('Error reading data file:', error);
            this.deliveries = [];
        }
    }
    findOne(id) {
        console.info(`Finding delivery with ID: ${id}`);
        const delivery = this.deliveries.find((item) => item.id === id);
        if (!delivery) {
            throw new common_1.NotFoundException(`Item with ID ${id} not found`);
        }
        return delivery;
    }
};
exports.NextDeliveryService = NextDeliveryService;
exports.NextDeliveryService = NextDeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], NextDeliveryService);
//# sourceMappingURL=next-delivery.service.js.map