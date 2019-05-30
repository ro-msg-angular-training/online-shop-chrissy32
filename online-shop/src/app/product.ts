export class Product {
  public id: number;
  public name: string;
  public description: string;
  public price: any;
  public weight: any;
  public category: number;
  public supplier: number;
  public imageURL: string;
  public categoryName: string;
  public categoryDescription: string;

  constructor(id: number, name: string, description: string, price: any, weight: any, category: number, supplier: number,
    imageURL: string, categoryName: string, categoryDescription: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.weight = weight;
    this.category = category;
    this.supplier = supplier;
    this.imageURL = imageURL;
    this.categoryName = categoryName;
    this.categoryDescription = categoryDescription;
  }
}