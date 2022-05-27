import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CitiesQuery = {
    cities: () => {
        return prisma.city.findMany();
    },
    selectCity: (parent, args) => {

        const cityId = args.id;

        return prisma.city.findUnique({
            where: {
                id: Number(cityId),
            },
        });

    },
};

export default CitiesQuery;