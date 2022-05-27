import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const StatesQuery = {
    states: () => {
        return prisma.state.findMany();
    },
    selectState: (parent, args) => {

        const { id } = args;

        return prisma.state.findUnique({
            where: {
                id: +id,
            },
        });

    },
};

export default StatesQuery;