export class ProductidQuantity {
    public productID: number;
    public quantity: number;

    constructor(product: number, quantity: number) {
        this.productID = product;
        this.quantity = quantity;
    }
}