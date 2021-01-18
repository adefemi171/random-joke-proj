import axios from "axios";
import config from "../config";
import { Service } from "typedi";
import { Joke } from "../models/Joke";

@Service()
export class JokeService {

  async getRandomJoke(category : string): Promise<Joke> {
    const { data } = await axios.get<Joke>(`${config.apiUrl}/jokes/random?category=${category}`);
    return data;
  }
}
