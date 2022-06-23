import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client=new ApolloClient({
  uri:'https://api-sa-east-1.graphcms.com/v2/cl4o9cyky1f5r01xxhlt49v6e/master',
  cache: new InMemoryCache()
})