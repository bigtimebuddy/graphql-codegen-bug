import { default as gql } from "graphql-tag";

export default gql`
  "1. Queries for retrieving colors"
  type Query {
    "2. Returns all colors"
    colors(
      "3. Filter colors by scope"
      scope: [String]
    ): [String]
  }
`;
