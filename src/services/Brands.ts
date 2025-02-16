import axios from "axios";
import { Brand } from "../types/Brand";

class BrandService {
  async findBrands(): Promise<Brand[]> {
    return (
      await axios.get("https://edendesk.proviamoalmacengourmet.com/api/brands")
    ).data;
  }

  async findBrandById(id: Brand["id"]): Promise<Brand> {
    return (
      await axios.get(
        `https://edendesk.proviamoalmacengourmet.com/api/brands/${id}`
      )
    ).data;
  }
}

export default new BrandService();
