import axios from "axios";
import { Brand } from "../types/Brand";
import { currentEndpoint } from "../utils/endpointsHandler";

class BrandService {
  async findBrands(): Promise<Brand[]> {
    return (await axios.get(`${currentEndpoint}/api/brands`)).data;
  }

  async findBrandById(id: Brand["id"]): Promise<Brand> {
    return (await axios.get(`${currentEndpoint}/api/brands/${id}`)).data;
  }
}

export default new BrandService();
