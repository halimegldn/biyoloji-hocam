import z, { email } from "zod";

export const ContactSchema = z.object({
    name: z.string().min(1, { message: "Lütfen adınızı girin" }),
    email: z.email().min(1, { message: "Lütfen mesajınızı girin" }),
    subject: z.string().min(1, { message: "Lütfen konuyu girin" }),
    personId: z.string().min(1, { message: "Lütfen kim olduğunuzu belirtin" }),
    message: z.string().min(1, { message: "Lütfen mesajınızı girin" }),
})