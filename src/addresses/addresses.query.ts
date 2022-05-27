import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const AddressesQuery = {
    addresses: () => {
        return prisma.address.findMany();
    },
    selectAddress: (parent, args) => {

        const { id } = args;

        return prisma.address.findUnique({
            where: {
                id: +id,
            },
        });

    },
};

export default AddressesQuery;