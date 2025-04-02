import z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  email: z.string().trim().email({ message: "E-mail inválido" }),
  contact: z.string(),
  message: z
    .string()
    .trim()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
