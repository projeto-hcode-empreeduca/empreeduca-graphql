import { buildSchema } from "graphql";

const StatesSchema = buildSchema(`
    type State {
        id: ID!
        name: String!
        uf: String!
    }
    type Query {
        states: [State]!
        selectState(id: ID!): State
    }
`);

export default StatesSchema;