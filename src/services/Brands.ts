import axios from "axios";
import { Brand } from "../types/Brand";

class BrandService {
  async findBrands(): Promise<Brand[]> {
    return (await axios.get("http://localhost:5000/api/brands")).data;
  }

  async findBrandById(id: Brand["id"]): Promise<Brand> {
    return (await axios.get(`http://localhost:5000/api/brands/${id}`)).data;
  }
}

export default new BrandService();
