import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "./utils/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Awetu Technologies",
  description:
    " Somos uma startup inovadora dedicada a revolucionar o setor tecnológico. Com o propósito claro de desenvolver soluções tecnológicas de alta qualidade, buscamos atender as necessidades atuais e futuras dos nossos clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>{/* <meta name="theme-color" content="#0d9488" /> */}</head>
      <body className={`${dmSans.variable} antialiased no-scrollbar `}>
        <Toaster richColors closeButton expand />
        {children}
      </body>
    </html>
  );
}
