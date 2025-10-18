import { prisma } from "@/prisma/prisma";

export async function GetLessons() {
    try {
        const lessons = await prisma.lesson.findMany({
            orderBy: { createdAt: "desc" },
        })
        return lessons;
    } catch (error) {
        console.log("Error", error);
    }
}