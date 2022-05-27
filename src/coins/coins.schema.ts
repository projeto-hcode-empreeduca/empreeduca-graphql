import { buildSchema } from "graphql";

const CoinsSchema = buildSchema(`
    type Coin {
        id: ID!
        name: String!
        code: String!
    }
    type Query {
        coins: [Coin]!
        selectCoin(id: ID!): Coin
    }
`);

export default CoinsSchema;