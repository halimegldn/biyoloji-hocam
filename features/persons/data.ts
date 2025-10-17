import { prisma } from "@/prisma/prisma";

export async function GetPersons() {
    try {
        const persons = await prisma.person.findMany({
            select: { id: true, name: true },
            orderBy: { createdAt: "desc" }
        })
        return persons;
    } catch (error) {
        console.log("Error", error);
    }
}