import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const client  = new ApolloClient({
  uri:  'https://api-sa-east-1.graphcms.com/v2/cl4o8n0bt1aqx01z20z8xgve3/master',
  cache:  new InMemoryCache()
})