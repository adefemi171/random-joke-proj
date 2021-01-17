import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Joke {

  @Field()
  created_at: string;
  
  @Field()
  icon_url: string;

  @Field()
  id: string;

  @Field()
  updated_at: string;

  @Field()
  value: string;

  @Field(()=> [String])
  categories: string[];
}
