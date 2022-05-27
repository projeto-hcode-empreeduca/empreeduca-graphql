import { buildSchema } from "graphql";

const AddressesSchema = buildSchema(`
    type Address {
        id: ID!
        street: String!
        number: String!
        complement: String
        district: String!
        zipCode: String!
        cityId: Int!
    }
    type Query {
        addresses: [Address]!
        selectAddress(id: ID!): Address
    }
    input CreateAddressInput {
        street: String!
        number: String!
        complement: String
        district: String!
        zipCode: String!
        cityId: Int!
    }
    input UpdateAddressInput {
        street: String
        number: String
        complement: String
        district: String
        zipCode: String
        cityId: Int
    }
    type Mutation {
        createAddress(input: CreateAddressInput!): Address
        updateAddress(id: ID!, input: UpdateAddressInput): Address
        removeAddress(id: ID!): Address
    }
`);

export default AddressesSchema;