"use server";

import NewLeadEmail from "@/app/components/emails/new-lead";
import WelcomeEmail from "@/app/components/emails/welcome";
import { ContactFormSchema } from "@/app/utils/shemas";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (datainfo: ContactFormSchema) => {
  try {
    const { error } = await resend.emails.send({
      from: `Awetu <${process.env.RESEND_EMAIL_FROM}>`,
      to: [datainfo.email],
      subject: "Bem-vindo a bordo - Awetu",
      react: WelcomeEmail({ name: datainfo.name }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};

export const receivedEmailFromUser = async (datainfo: ContactFormSchema) => {
  try {
    const { error } = await resend.emails.send({
      from: `${datainfo.name} <${process.env.RESEND_EMAIL_FROM}>`,
      to: [datainfo.email],
      subject: "New Lead",
      react: NewLeadEmail({
        name: datainfo.name || "Mariano",
        contact: datainfo.contact || "45748764",
        email: datainfo.email || "s2Tb0@example.com",
        message: datainfo.message || "Mensagem",
      }),
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};
