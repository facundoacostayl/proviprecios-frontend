export class ProductService {
  async findProducts() {
    return await fetch("http://localhost:5000/api/products");
  }
}
