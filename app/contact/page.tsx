import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/features/contact/components/contact-form";
import { GetPersons } from "@/features/persons/data";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default async function ContactPage() {

    const persons = await GetPersons() ?? [];
    return (
        <div className="min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">İletişim</h1>
                    <p className="text-xl text-muted-foreground text-pretty">Sorularınız için benimle iletişime geçebilirsiniz</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>İletişim Formu</CardTitle>
                                <CardDescription>
                                    Formu doldurarak bana mesaj gönderebilirsiniz. En kısa sürede size dönüş yapacağım.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ContactForm persons={persons ?? []} />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">İletişim Bilgileri</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-foreground">E-posta</p>
                                        <a
                                            href="mailto:ogretmen@example.com"
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            ogretmen@example.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-foreground">Telefon</p>
                                        <a
                                            href="tel:+90XXXXXXXXX"
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +90 XXX XXX XX XX
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-foreground">Adres</p>
                                        <p className="text-sm text-muted-foreground">
                                            [Okul/Kurum Adı]
                                            <br />
                                            [Adres Bilgisi]
                                            <br />
                                            [Şehir, Posta Kodu]
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-accent" />
                                    Ofis Saatleri
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Pazartesi - Cuma</span>
                                    <span className="font-medium text-foreground">09:00 - 17:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Cumartesi</span>
                                    <span className="font-medium text-foreground">10:00 - 14:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Pazar</span>
                                    <span className="font-medium text-foreground">Kapalı</span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                                    * Randevu için lütfen önceden iletişime geçiniz
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}