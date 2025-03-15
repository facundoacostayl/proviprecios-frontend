import axios from "axios";
import { Product } from "../types/Product";
import UpdateProductRequest from "../models/products/UpdateProductRequest";
import { currentEndpoint } from "../utils/endpointsHandler";

class ProductService {
  async findProducts(): Promise<Product[]> {
    return (await axios.get(`${currentEndpoint}/api/products`)).data;
  }

  async findProductsByBrandId(brandId: Product["brandId"]): Promise<Product[]> {
    return (await axios.get(`${currentEndpoint}/api/products/brand/${brandId}`))
      .data;
  }

  async updateProducts(
    updateProductRequest: UpdateProductRequest[]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    const response = await axios.post(`${currentEndpoint}/api/products`, {
      updateProductRequest: [...updateProductRequest],
    });
    return response.data.data;
  }
}

export default new ProductService();
