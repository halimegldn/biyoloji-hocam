"use server";

import { ContactSchema } from "./schemas";
import { prisma } from "@/prisma/prisma";

export async function Contact(prevenState: any, formData: FormData) {
    const personIdValue = formData.get("personId");
    const validationFields = ContactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        personId: personIdValue,
        message: formData.get("message"),
    })

    if (!validationFields.success) {
        return {
            success: false,
            errors: validationFields.error.flatten().fieldErrors,
            error: "Geçersiz alanlar mevcut, iletişim oluşturulamadı.",
            details: validationFields.error.format(),
        };
    }
    console.log("incoming personId:", personIdValue);

    const { name, email, subject, personId, message } = validationFields.data;

    try {
        await prisma.contact.create({
            data: {
                name,
                email,
                subject,
                message,
                person: { connect: { id: personId } },
            },
        })
        return {
            success: true,
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
        }
    }
}