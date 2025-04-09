import * as React from "react";

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface WelcomeEmailProps {
  name: string;
  contact: string;
  email: string;
  message: string;
}

const NewLeadEmail = ({ name, contact, email, message }: WelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="font-normal text-center p-0 my-8 mx-0">
              <strong className="text-blue-500 text-xl">
                {" "}
                Novo Lead : {name}
              </strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Um lead é um potencial cliente que demonstrou interesse em nossos
              produtos ou serviços.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Cada lead representa uma oportunidade de negócio, tratá-los bem é
              findamental para converter esse interesse inicial em uma venda.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <span className="block text-lg font-bold text-blue-900">
                Informações do Lead :
              </span>
              <Row>
                <Column>
                  <Text className="text-[#666666] text-[12px] leading-[24px]">
                    Nome: <span className="font-bold">{name}</span>
                  </Text>
                  <Text className="text-[#666666] text-[12px] leading-[24px]">
                    Contato: <span className="font-bold">{contact}</span>
                  </Text>
                  <Text className="text-[#666666] text-[12px] leading-[24px]">
                    Email: <span className="font-bold">{email}</span>
                  </Text>

                  <Text className="text-[#666666] text-[12px] leading-[24px]">
                    Mensagem: <span className="font-bold">{message}</span>
                  </Text>
                </Column>
              </Row>
              {/* {message } */}
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px] text-center">
              Portanto, tratar cada lead com respeito e atenção é essencial para
              maximizar o potencial de crescimento da empresa e aumentar as
              taxas de conversão.
            </Text>

            <Section className="flex justify-center items-center gap-4 text-center  mb-[32px]">
              <Link href="#" target="_blank">
                <Instagram
                  size={28}
                  className="text-dark-blue-700/95 hover:text-white hover:scale-105 transition-all mr-2 "
                />
              </Link>
              <Link href="#" target="_blank">
                <Linkedin
                  size={28}
                  className="text-dark-blue-700/95 hover:text-white hover:scale-105 transition-all "
                />
              </Link>
              <Link href="#" target="_blank">
                <Facebook
                  size={28}
                  className="text-dark-blue-700/95 hover:text-white hover:scale-105 transition-all "
                />
              </Link>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewLeadEmail;
