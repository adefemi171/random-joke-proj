import { Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Category } from "../models/Category";
import { CategoryService } from "../service/category.service";

@Service()
@Resolver(Category)
export class ChangePasswordResolver {

  constructor(
    private readonly categoryService : CategoryService,
  ) {}

  @Query(() => Category)
  async allCategories(): Promise<Category>{
    return {
      categories: await this.categoryService.getAllCategories()
    }
  }
}
