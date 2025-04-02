"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(5, { message: "O nome deve ter pelo menos 5 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  contact: z.string(),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({ resolver: zodResolver(contactFormSchema) });

  const handleSubmitForm = (data: ContactFormSchema) => {
    console.log("Subumetido");
    console.log(data);
  };

  return (
    <form
      className=" w-[400px] mt-12 flex flex-col gap-3 px-8 md:px-0 md:h-[450px]"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Input placeholder=" Digite seu nome" type="text" {...register("name")} />
      <p className="mt-1 text-xs text-red-400">
        {" "}
        <ErrorMessage errors={errors} name="name" />
      </p>

      <Input placeholder=" E-mail" type="email" {...register("email")} />
      <p className="mt-1 text-xs text-red-400">
        {" "}
        <ErrorMessage errors={errors} name="email" />
      </p>

      <Input
        placeholder="Seu contacto"
        type="number"
        {...register("contact")}
      />

      <Textarea placeholder="Deixe uma mensagem" {...register("message")} />
      <p className="mt-1 text-xs text-red-400">
        {" "}
        <ErrorMessage errors={errors} name="message" />
      </p>

      <Button
        type="submit"
        className="mt-5 rounded-lg py-6 bg-gradient-to-br from-dark-blue-700 to-light-blue-200 font-medium hover:brightness-90"
      >
        {" "}
        Quero garantir o meu lugar!
      </Button>
    </form>
  );
};

export default ContactForm;
