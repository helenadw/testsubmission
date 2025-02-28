"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextDeliveryModule = void 0;
const common_1 = require("@nestjs/common");
const next_delivery_controller_1 = require("./next-delivery.controller");
const next_delivery_service_1 = require("./next-delivery.service");
let NextDeliveryModule = class NextDeliveryModule {
};
exports.NextDeliveryModule = NextDeliveryModule;
exports.NextDeliveryModule = NextDeliveryModule = __decorate([
    (0, common_1.Module)({
        controllers: [next_delivery_controller_1.NextDeliveryController],
        providers: [next_delivery_service_1.NextDeliveryService],
    })
], NextDeliveryModule);
//# sourceMappingURL=next-delivery.module.js.map