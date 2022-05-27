import { buildSchema } from "graphql";

const CitiesSchema = buildSchema(`
    type City {
        id: ID!
        name: String!
        stateId: Int!
    }
    type Query {
        cities: [City]!
        selectCity(id: ID!): City
    }
`);

export default CitiesSchema;