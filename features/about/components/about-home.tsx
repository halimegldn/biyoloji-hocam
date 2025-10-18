import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, DownloadIcon, GraduationCap, Heart, Sparkles, Target } from "lucide-react";
import Link from "next/link";

export function AboutHome() {
    return (
        <div className="min-h-screen py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-16 text-center">
                    <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                        Tanışalım
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Hakkımda
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Eğitim yolculuğum ve öğretim felsefem hakkında daha fazla bilgi edinin
                    </p>
                </div>

                <Card className="mb-8 border-2 hover:shadow-xl transition-all bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader className="relative">
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                                <GraduationCap className="w-6 h-6 text-primary-foreground" />
                            </div>
                            Özgeçmiş
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-slate max-w-none relative">
                        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                            Merhaba! Ben [Öğretmen Adı], [X] yıldır eğitim alanında çalışan bir öğretmenim. [Üniversite Adı]'ndan
                            [Bölüm] mezunuyum ve eğitim hayatım boyunca yüzlerce öğrenciye rehberlik etme fırsatı buldum.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                            Kariyerime [Yıl] yılında [Okul/Kurum Adı]'nda başladım. O zamandan beri [Branş/Alan] alanında uzmanlaştım
                            ve öğrencilerimin akademik başarılarına katkıda bulunmaktan büyük mutluluk duyuyorum.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Eğitim felsefem, her öğrencinin benzersiz olduğu ve kendi hızında öğrendiği gerçeğine dayanır. Bu nedenle,
                            derslerimde bireysel farklılıkları göz önünde bulundurarak öğrenci merkezli bir yaklaşım benimsiyorum.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-8 border-2 hover:shadow-xl transition-all bg-gradient-to-br from-card to-accent/5 backdrop-blur-sm overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader className="relative">
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
                                <Heart className="w-6 h-6 text-accent-foreground" />
                            </div>
                            Pedagojik Yaklaşımım
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 shadow-md">
                                    <Target className="w-5 h-5 text-primary-foreground" />
                                </div>
                                <h3 className="font-semibold text-lg mb-3 text-foreground">Öğrenci Merkezli Öğrenme</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Her öğrencinin farklı öğrenme stillerine sahip olduğuna inanıyorum. Derslerimde görsel, işitsel ve
                                    kinestetik öğrenme yöntemlerini bir araya getirerek tüm öğrencilerin konuyu en iyi şekilde kavramasını
                                    sağlıyorum.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-4 shadow-md">
                                    <Sparkles className="w-5 h-5 text-accent-foreground" />
                                </div>
                                <h3 className="font-semibold text-lg mb-3 text-foreground">Aktif Katılım</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Öğrencilerimin derse aktif katılımını teşvik ediyorum. Soru-cevap, grup çalışmaları ve proje tabanlı
                                    öğrenme yöntemleriyle öğrencilerin konuyu sadece dinlemekle kalmayıp, yaşayarak öğrenmelerini
                                    sağlıyorum.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 shadow-md">
                                    <GraduationCap className="w-5 h-5 text-primary-foreground" />
                                </div>
                                <h3 className="font-semibold text-lg mb-3 text-foreground">Sürekli Gelişim</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Eğitim alanındaki yenilikleri yakından takip ediyor ve öğretim yöntemlerimi sürekli geliştiriyorum.
                                    Seminerler, workshoplar ve mesleki gelişim programlarına düzenli olarak katılarak kendimi güncel
                                    tutuyorum.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-xl transition-all bg-gradient-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardHeader className="relative">
                        <CardTitle className="flex items-center gap-3 text-2xl">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
                                <Award className="w-6 h-6 text-accent-foreground" />
                            </div>
                            Başarılar ve Sertifikalar
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <Link href="/cv.pdf" download prefetch={false} className="btn text-muted-foreground">
                                    <DownloadIcon />
                                </Link>
                                <span className="text-muted-foreground text-lg">[Sertifika/Ödül Adı] - [Yıl]</span>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <Link href="/cv.pdf" download prefetch={false} className="btn text-muted-foreground">
                                    <DownloadIcon />
                                </Link>
                                <span className="text-muted-foreground text-lg">[Sertifika/Ödül Adı] - [Yıl]</span>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground text-lg">[Başarı/Ödül] - [Yıl]</span>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-accent/5 to-transparent border border-accent/10 hover:border-accent/30 transition-all">
                                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground text-lg">[Konferans/Seminer] Katılımcısı - [Yıl]</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}