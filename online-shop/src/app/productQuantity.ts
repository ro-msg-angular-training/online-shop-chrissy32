import { Product } from './product';

export class ProductQuantity {
    public product: Product;
    public quantity: number;
    
    public getName(): string {
        return this.product.name;
    }

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
      }

    public setQuantity(quantity: number): void {
        this.quantity = quantity;
    }
}