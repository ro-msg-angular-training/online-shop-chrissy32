import { Address } from './address';
import { ProductidQuantity } from './productidQuantity';

export class Order {
    timestamp: Date;
    deliveryAddress: Address;
    products: ProductidQuantity[];

    constructor(deliveryAddress: Address, products: ProductidQuantity[]) {
        this.timestamp = null;
        this.deliveryAddress = deliveryAddress;
        this.products = products;
    }

}