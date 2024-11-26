# GraphQL Codegen Bug

Found a documentation bug when using [@graphql-codegen/cli](https://www.npmjs.com/package/@graphql-codegen/cli).

## Running

```bash
npm install
npm test
```

## Details

**./src/schemas/colors.ts**

```ts
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
```

**./src/schemas/versions.ts**

```ts
export default gql`
  "4. Queries for retrieving available versions"
  type Query {
    "5. Returns all available versions"
    versions: [String]
  }
`;
```

**./src/generated/types.ts**

You can see that `QueryColorAllArgs` is incorrectly documented. Unclear why it's getting the `Query` documentation (4) from **version.ts**.

```ts
/** 4. Queries for retrieving available versions */
export type Query = {
  __typename?: 'Query';
  /** 2. Returns all colors */
  colors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** 5. Returns all available versions */
  versions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** 4. Queries for retrieving available versions */
export type QueryColorsArgs = {
  scope?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
```