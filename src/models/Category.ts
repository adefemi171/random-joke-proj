import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Category {
  
  @Field(()=>[String])
  categories: string[];
}
