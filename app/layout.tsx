import type { Metadata } from "next";
import "./globals.css";
import { dmSans } from "./utils/fonts";

export const metadata: Metadata = {
  title: "Awetu Technologies",
  description: "Awetu Oficial Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} antialiased `}>{children}</body>
    </html>
  );
}
