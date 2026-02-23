"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { contactFormSchema, ContactFormSchema } from "../utils/shemas";
import { receivedEmailFromUser, sendEmail } from "@/lib/actions";
import { toast } from "sonner";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({ resolver: zodResolver(contactFormSchema) });

  const handleSuccessMessage = () => {
    setTimeout(() => {
      toast.success("Obrigado por nos contactar");
    }, 1000);
  };

  const handleSubmitForm = async (data: ContactFormSchema) => {
    handleSuccessMessage();
    await sendEmail(data);
    await receivedEmailFromUser(data);
    reset();
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
        disabled={isSubmitting}
        className="mt-5 rounded-lg py-6 bg-gradient-to-br from-dark-blue-700 to-light-blue-200 font-medium hover:brightness-90"
      >
        {" "}
        Quero garantir o meu lugar!
      </Button>
    </form>
  );
};

export default ContactForm;
