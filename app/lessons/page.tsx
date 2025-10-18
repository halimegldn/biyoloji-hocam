import { LessonsHome } from "@/features/lessons/components/lessons-home";
import { GetLessons } from "@/features/lessons/data";

export default async function Lessons() {

    const lessons = await GetLessons();

    return (
        <LessonsHome lessons={lessons ?? []} />
    )
}