import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const AddressesMutation = {
    createAddress: (parent, args) => {

        const { street, number, complement, district, zipCode, cityId } = args.input;

        return prisma.address.create({
            data: {
                street,
                number,
                complement,
                district,
                zipCode,
                city: {
                    connect: {
                        id: Number(cityId),
                    },
                },
            },
        });

    },
    updateAddress: async (parent, args) => {

        const { id, input: data } = args;

        const address = await prisma.address.findUnique({
            where: {
                id: +id,
            },
        });

        if (!address) {
            throw new Error('Endereço não encontrado.');
        }

        return prisma.address.update({
            data,
            where: {
                id: +id,
            },
        });

    },
    removeAddress: async (parent, args) => {

        const addressId = args.id;

        const address = await prisma.address.findUnique({
            where: {
                id: +addressId,
            },
        });

        if (!address) {
            throw new Error('Endereço não encontrado.');
        }

        return prisma.address.delete({
            where: {
                id: +addressId,
            },
        });

    }
};

export default AddressesMutation;