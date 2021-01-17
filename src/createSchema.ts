import { buildSchema, useContainer } from "type-graphql";
import { Container } from 'typedi'

export const createSchema = async () =>{
  useContainer(Container)
  return await buildSchema({
    resolvers: [__dirname + "/resolvers/**/*.resolver.ts"],
  });
}
