"use client";

import { Contact } from "../actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useActionState, useState } from "react";
import { Person } from "@/prisma/generated/prisma";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactForm({ persons }: { persons: { id: string, name: string }[] }) {

    const [state, formAction] = useActionState(Contact, null);
    const [person, setPerson] = useState<string>(persons[0]?.id ?? "");

    return (
        <form action={formAction} className="space-y-6">
            <div className="flex justify-between gap-8">
                <div className="space-y-2 w-full">
                    <Label htmlFor="name">Ad Soyad *</Label>
                    <Input id="name" name="name" placeholder="Adınız ve soyadınız" required />
                </div>
                <div className="space-y-2 w-full">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" name="email" placeholder="ornek@ornek.com" required />
                </div>
            </div>
            <Select value={person} onValueChange={setPerson}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
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


    )
}