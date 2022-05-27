import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CoinsQuery = {
    coins: () => {
        return prisma.coin.findMany();
    },
    selectCoin: (parent, args: any) => {

        const coinId = args.id;

        return prisma.coin.findUnique({
            where: {
                id: Number(coinId),
            },
        });

    },
};

export default CoinsQuery;