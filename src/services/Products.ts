import axios from "axios";
import { Product } from "../types/Product";

class ProductService {
  async findProducts(): Promise<Product[]> {
    return (await axios.get("http://localhost:5000/api/products")).data;
  }
}

export default new ProductService();
