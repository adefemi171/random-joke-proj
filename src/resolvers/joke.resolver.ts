import { Arg, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Joke } from "../models/Joke";
import { JokeService } from "../service/joke.service";

@Service()
@Resolver(Joke)
export class JokeResolver {

  constructor(
    private readonly jokeService : JokeService,
  ) {}

  @Query(() => Joke)
  async getRandomJoke(@Arg("category") category : string ): Promise<Joke>{
    return this.jokeService.getRandomJoke(category)
  }
}
