import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CategoriesQuery = {
    categories: () => {
        return prisma.movieCategory.findMany();
    },
    selectCategory: (parent, args) => {

        const categoryId = args.identificador;

        return prisma.movieCategory.findUnique({
            where: {
                id: Number(categoryId),
            },
        });

    },
};

export default CategoriesQuery;