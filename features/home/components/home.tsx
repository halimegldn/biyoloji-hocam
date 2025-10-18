import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Heart, Mail, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export function HomePage() {
    return (
        <div className="min-h-screen">
            <section className="relative py-24 md:py-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,183,77,0.08),transparent_50%)]" />

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-primary/15 to-accent/15 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20 shadow-sm">
                            <Sparkles className="w-4 h-4" />
                            <span>Merhaba! Hoş geldiniz</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                            Öğrenme Yolculuğunuzda
                            <br />
                            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                                Yanınızdayım
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty leading-relaxed max-w-3xl mx-auto">
                            Her öğrencinin kendine özgü bir öğrenme tarzı vardır. Ben de her birinize uygun yöntemlerle eğitim vermeyi
                            seviyorum.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-base px-8 h-12"
                            >
                                <Link href="/about">
                                    <Heart className="w-4 h-4 mr-2" />
                                    Beni Tanıyın
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background text-base px-8 h-12 border-2 hover:border-primary/50 transition-all hover:scale-105"
                            >
                                <Link href="/contact">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Mesaj Gönderin
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                            Neler Sunuyorum
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
                            Size Özel Eğitim Deneyimi
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                            Öğrencilerime en iyi eğitimi verebilmek için sürekli kendimi geliştiriyor ve modern öğretim yöntemlerini
                            kullanıyorum.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardHeader className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                                    <Heart className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <CardTitle className="text-xl mb-2">Öğrenci Odaklı</CardTitle>
                                <CardDescription className="leading-relaxed text-base">
                                    Her öğrencinin ihtiyaçlarına özel, sabırlı ve destekleyici bir öğretim yaklaşımı
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardHeader className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                                    <FileText className="w-7 h-7 text-accent-foreground" />
                                </div>
                                <CardTitle className="text-xl mb-2">Zengin İçerik</CardTitle>
                                <CardDescription className="leading-relaxed text-base">
                                    Hazırladığım notlar, ödevler ve ek materyallerle derslerinizi destekliyorum
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardHeader className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <CardTitle className="text-xl mb-2">Her Zaman Ulaşılabilir</CardTitle>
                                <CardDescription className="leading-relaxed text-base">
                                    Sorularınız için her zaman buradayım. Çekinmeden iletişime geçebilirsiniz
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardHeader className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-7 h-7 text-accent-foreground" />
                                </div>
                                <CardTitle className="text-xl mb-2">Çeşitli Dersler</CardTitle>
                                <CardDescription className="leading-relaxed text-base">
                                    Farklı seviyelerde ve konularda dersler veriyorum
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardHeader className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                                    <Sparkles className="w-7 h-7 text-primary-foreground" />
                                </div>
                                <CardTitle className="text-xl mb-2">Eğlenceli Öğrenme</CardTitle>
                                <CardDescription className="leading-relaxed text-base">
                                    Öğrenmenin sıkıcı olması gerekmiyor! Derslerimde eğlenerek öğreniyoruz
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <CardHeader className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                                    <Mail className="w-7 h-7 text-accent-foreground" />
                                </div>
                                <CardTitle className="text-xl mb-2">Kolay İletişim</CardTitle>
                                <CardDescription className="leading-relaxed text-base">
                                    Online form ile hızlıca mesaj gönderebilir, sorularınızı sorabilirsiniz
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),transparent_70%)]" />

                <div className="container mx-auto px-4 relative">
                    <div className="max-w-3xl mx-auto">
                        <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl" />

                            <CardHeader className="text-center py-12 px-6 relative">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-lg mb-6 mx-auto">
                                    <MessageCircle className="w-8 h-8 text-primary-foreground" />
                                </div>
                                <CardTitle className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                                    Aklınıza Takılan Var mı?
                                </CardTitle>
                                <CardDescription className="text-lg md:text-xl leading-relaxed text-pretty mb-8">
                                    Dersler, kaynaklar veya herhangi bir konuda sormak istediğiniz bir şey varsa benimle iletişime
                                    geçmekten çekinmeyin. Size yardımcı olmaktan mutluluk duyarım!
                                </CardDescription>
                                <Button
                                    asChild
                                    size="lg"
                                    className="rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 text-base px-8 h-12"
                                >
                                    <Link href="/contact">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Hemen Mesaj Gönderin
                                    </Link>
                                </Button>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}