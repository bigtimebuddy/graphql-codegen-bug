import { default as gql } from "graphql-tag";

export default gql`
  "4. Queries for retrieving available versions"
  type Query {
    "5. Returns all available versions"
    versions: [String]
  }
`;
