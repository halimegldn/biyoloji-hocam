import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lesson } from "@/prisma/generated/prisma/client";
import { BookOpen, CheckCircle2, Lightbulb } from "lucide-react";

export function LessonsHome({ lessons }: { lessons: Lesson[] }) {

    return (
        <div className="min-h-screen py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-16 text-center">
                    <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                        Eğitim Programı
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Dersler
                    </h1>
                    <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                        Verdiğim dersler, içerik başlıkları ve öğrenme kazanımları hakkında detaylı bilgi
                    </p>
                </div>

                <div className="grid gap-8">
                    {lessons.map((lesson, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${lesson.color === "primary" ? "from-primary/5" : "from-accent/5"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                            />

                            <CardHeader className="relative">
                                <div className="flex items-start justify-between gap-4 flex-wrap">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div
                                                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${lesson.color === "primary" ? "from-primary to-primary/70" : "from-accent to-accent/70"} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                                            >
                                                <BookOpen
                                                    className={`w-6 h-6 ${lesson.color === "primary" ? "text-primary-foreground" : "text-accent-foreground"}`}
                                                />
                                            </div>
                                            <CardTitle className="text-3xl">{lesson.title}</CardTitle>
                                        </div>
                                        <CardDescription className="text-lg leading-relaxed">{lesson.description}</CardDescription>
                                    </div>
                                    <Badge
                                        variant="secondary"
                                        className={`text-base px-4 py-1.5 ${lesson.color === "primary" ? "bg-primary/10 text-primary border-primary/20" : "bg-accent/10 text-accent border-accent/20"} border`}
                                    >
                                        {lesson.level}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="relative">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Topics */}
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 border border-border/50">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Lightbulb className={`w-5 h-5 ${lesson.color === "primary" ? "text-primary" : "text-accent"}`} />
                                            <h3 className="font-semibold text-xl text-foreground">İçerik Başlıkları</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {(Array.isArray(lesson.topics) ? (lesson.topics as string[]) : []).map((topic, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-muted-foreground text-base">
                                                    <span
                                                        className={`${lesson.color === "primary" ? "text-primary" : "text-accent"} mt-1.5 text-lg`}
                                                    >
                                                        •
                                                    </span>
                                                    <span className="leading-relaxed">{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Learning Outcomes */}
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/30 border border-border/50">
                                        <div className="flex items-center gap-2 mb-4">
                                            <CheckCircle2
                                                className={`w-5 h-5 ${lesson.color === "primary" ? "text-primary" : "text-accent"}`}
                                            />
                                            <h3 className="font-semibold text-xl text-foreground">Öğrenme Kazanımları</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {(lesson.outcomes as string[] | undefined)?.map((outcome: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-3 text-muted-foreground text-base">
                                                    <CheckCircle2
                                                        className={`w-5 h-5 ${lesson.color === "primary" ? "text-primary" : "text-accent"} flex-shrink-0 mt-0.5`}
                                                    />
                                                    <span className="leading-relaxed">{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className="mt-12 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/20 shadow-lg">
                    <CardContent className="pt-8 pb-8 px-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 shadow-md">
                                <BookOpen className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                <strong className="text-foreground">Not:</strong> Tüm dersler Milli Eğitim Bakanlığı müfredatına uygun
                                olarak hazırlanmıştır. Ders içerikleri ve kazanımlar, öğrencilerin seviyelerine göre özelleştirilebilir.
                                Daha fazla bilgi için lütfen benimle iletişime geçin.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}