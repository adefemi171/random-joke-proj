import axios from "axios";
import config from "../config";
import { Service } from "typedi";

@Service()
export class CategoryService {

  async getAllCategories(): Promise<string[]> {
    const { data } = await axios.get<string[]>(`${config.apiUrl}/jokes/categories`);
    return data;
  }
}
