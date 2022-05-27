import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { PrismaClient } from "@prisma/client";
import { makeExecutableSchema } from "graphql-tools";
import CoinsSchema from "./src/coins/coins.schema";
import CoinsQuery from "./src/coins/coins.query";
import CategoriesSchema from "./src/categories/categories.schema";
import CategoriesQuery from "./src/categories/categories.query";
import StatesSchema from "./src/states/states.schema";
import StatesQuery from "./src/states/states.query";
import CitiesQuery from "./src/cities/cities.query";
import CitiesSchema from "./src/cities/cities.schema";
import AddressesSchema from "./src/addresses/addresses.schema";
import AddressesQuery from "./src/addresses/addresses.query";
import AddressesMutation from "./src/addresses/addresses.mutation";

const app = express();

const schema = makeExecutableSchema({
    typeDefs: [
        CoinsSchema,
        CategoriesSchema,
        StatesSchema,
        CitiesSchema,
        AddressesSchema,
    ],
    resolvers: {
        Query: {
            ...CoinsQuery,
            ...CategoriesQuery,
            ...StatesQuery,
            ...CitiesQuery,
            ...AddressesQuery,
        },
        Mutation: {
            ...AddressesMutation,
        },
    },
});

app.use('/graphql', graphqlHTTP({
    schema,
}));

app.listen(5000);

console.log("Servidor Express e GraphQL rodando!");