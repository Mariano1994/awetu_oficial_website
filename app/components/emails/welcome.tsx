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
  Link,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  name: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "email/static";

const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
  const year = new Date().getFullYear();
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[550px]">
            <Heading className="font-normal text-center p-0 my-8 mx-0">
              <strong className="text-blue-900 text-xl">
                {" "}
                Bem-vindo a bordo na Awetu Technologies! 🚀{" "}
              </strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Saudações{" "}
              <span className="font-bold text-dark-blue-700">{name}</span> ,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Parabéns, você acaba embarcar em uma jornada rumo ao futuro! Na
              Awetu, não criamos apenas soluções, criamos revoluções. Nosso
              objetivo não é apenas desenvolver soluções inovadoras, mas
              transformar a vida das pessoas e impulsionar a cultura digital
              para um novo patamar.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Assim como uma tripulação de exploradores cósmicos, acreditamos
              que a tecnologia é apenas o meio, e nossa verdadeira missão é
              impactar positivamente as pessoas ao nosso redor. Com você a
              bordo, estamos um passo mais próximo de alcançar novas galáxias de
              inovação e evolução tecnológica!
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Prepare-se para a decolagem.🚀✨
            </Text>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-blue-900 text-white text-sm px-2 py-2  my-2 rounded-md "
                href="https://wa.me/+244945781642"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale connosco
              </Button>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section>
              <Text className="text-[#666666] text-[12px] leading-[24px] text-center">
                Antes da decolagem, siga nossas coordenadas digitais e
                conecte-se com a tripulação! No nosso centro de comando,
                compartilhamos descobertas e as próximas paradas dessa jornada
                revolucionária.
              </Text>

              <Section className=" text-center text-[#666666] text-[12px] mb-[32px]">
                <Row>
                  <Column align="right">
                    <Link
                      href="https://www.instagram.com/awetu_tech?igsh=MWRwM2VrY2Nzem45cA%3D%3D&utm_source=qr"
                      target="_blank"
                      className=" font-semibold"
                    >
                      Instagram
                    </Link>
                  </Column>
                  <Column align="center">
                    <Link
                      href="https://www.linkedin.com/company/awetutechnologies/"
                      target="_blank"
                      className=" font-semibold"
                    >
                      Linkedin
                    </Link>
                  </Column>
                  <Column align="left">
                    <Link
                      href="https://www.facebook.com/share/15VCyZP6sR/?mibextid=wwXIfr"
                      target="_blank"
                      className="font-semibold"
                    >
                      facebook
                    </Link>
                  </Column>
                </Row>
              </Section>

              <Text className="text-[#666666] text-[10px] leading-[24px] text-center">
                Awetu Technologies &copy; {year} . Todos os direitos reservados.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
