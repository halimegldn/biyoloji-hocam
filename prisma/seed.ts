import { PrismaClient, type Prisma } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
    const persons = [
        { name: "Öğrenci" },
        { name: "Veli" },
    ];

    await Promise.all(
        persons.map(({ name }) =>
            prisma.person.upsert({
                where: { name } satisfies Prisma.PersonWhereUniqueInput,
                update: { name },
                create: { name },
            }),
        ),
    );
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
