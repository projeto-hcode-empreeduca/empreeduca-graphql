import { buildSchema } from "graphql";

const CategoriesSchema = buildSchema(`
    type MovieCategory {
        id: ID!
        name: String!
    }
    type Query {
        categories: [MovieCategory]!
        selectCategory(identificador: ID!): MovieCategory
    }
`);

export default CategoriesSchema;