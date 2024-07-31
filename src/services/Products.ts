import axios from "axios";
import { Product } from "../types/Product";
import UpdateProductRequest from "../models/products/UpdateProductRequest";

class ProductService {
  async findProducts(): Promise<Product[]> {
    return (await axios.get("http://localhost:5000/api/products")).data;
  }

  async findProductsByBrandId(brandId: Product["brandId"]): Promise<Product[]> {
    return (
      await axios.get(`http://localhost:5000/api/products/brand/${brandId}`)
    ).data;
  }

  async updateProducts(
    updateProductRequest: UpdateProductRequest[]
  ): Promise<void> {
    await axios.post("http://localhost:5000/api/products", {
      updateProductRequest,
    });
  }
}

export default new ProductService();
