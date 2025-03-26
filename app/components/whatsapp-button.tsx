"use client";
import { WhatsappLogo } from "phosphor-react";
import Link from "next/link";
import React from "react";

interface WhatsAppProps {
  phoneNumber: string;
  message?: string;
}

function WhatsAppButton({ phoneNumber, message }: WhatsAppProps) {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message || ""
  )}`;

  return (
    <div className=" fixed bottom-0 right-2 z-50">
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white px-2 py-2 rounded-full hover:bg-green-600 transition-colors duration-200"
      >
        <WhatsappLogo size={30} weight="thin" />
      </Link>
    </div>
  );
}

export default WhatsAppButton;
