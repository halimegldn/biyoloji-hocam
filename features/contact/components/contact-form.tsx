"use client";

import { Contact } from "../actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // <-- EKLENDİ
import { useActionState, useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactForm({ persons }: { persons: { id: string, name: string }[] }) {
    const [state, formAction] = useActionState(Contact, null);
    const [person, setPerson] = useState<string>("");

    useEffect(() => {
        if (state?.success) {
            setPerson("");
        }
    }, [state?.success]);

    return (
        <>
            <form action={formAction} className="space-y-6">
                <div className="flex justify-between gap-8">
                    <div className="space-y-2 w-full">
                        <Label htmlFor="name">Ad Soyad *</Label>
                        <Input id="name" name="name" placeholder="Adınız ve soyadınız" required />
                    </div>
                    <div className="space-y-2 w-full">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input id="email" name="email" placeholder="ornek@ornek.com" type="email" required />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="person">Kime iletilecek?</Label>
                    <Select value={person} onValueChange={setPerson}>
                        <SelectTrigger id="person" className="w-full">
                            <SelectValue placeholder="Kişi seçin" />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                persons.map((person) => (
                                    <SelectItem value={person.id} key={person.id}>{person.name}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                    <input type="hidden" name="personId" value={person} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="subject">Konu *</Label>
                    <Input id="subject" name="subject" placeholder="Konu" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Mesaj *</Label>
                    <Textarea id="message" name="message" placeholder="Mesaj" required />
                </div>

                <Button type="submit">Kaydet</Button>
            </form>

            {/* Yalnızca submit sonrası göster */}
            {state !== null && (
                <div className="mt-4" aria-live="polite">
                    {state?.success ? (
                        <Badge variant="secondary">Mesajınız iletildi.</Badge>
                    ) : (
                        <Badge variant="destructive">Mesajınız iletilemedi, lütfen tekrar deneyin.</Badge>
                    )}
                </div>
            )}
        </>
    );
}
