import axios from "axios";
import { Product } from "../types/Product";

class ProductService {
  async findProducts(): Promise<Product[]> {
    return (await axios.get("http://localhost:5000/api/products")).data;
  }

  async findProductsByBrandId(brandId: Product["brandId"]): Promise<Product[]> {
    return (
      await axios.get(`http://localhost:5000/api/products/brand/${brandId}`)
    ).data;
  }
}

export default new ProductService();
