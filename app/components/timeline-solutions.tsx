import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Grip, Layers, PieChart, TrendingUp } from "lucide-react";
import figure from "../assets/figureRight5.svg";

const TimelineSolutions = () => {
  const data = [
    {
      title: "Transforme seu negócio através de dados",
      content: (
        <div className="flex flex-col gap-4">
          <div className="bg-gradient-to-tr from-light-blue-200 to-dark-blue-700 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
            <Layers className="text-white" size={28} />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8 leading-7">
            A informação certa no momento certo pode ser a chave para o sucesso
            empresarial. Transformar dados brutos em insights acionáveis permite
            otimizar processos, embasar decisões estratégicas e impulsionar a
            inovação. <br /> Nossa empresa auxilia negócios de todos os portes a
            extrair o máximo valor de seus dados, convertendo-os em ferramentas
            poderosas para crescimento e competitividade. Com soluções
            inteligentes e personalizadas, ajudamos sua empresa a tomar decisões
            mais assertivas e a se destacar no mercado. Descubra como a análise
            de dados pode transformar o seu negócio!
            {/* <div className="flex items-start gap-2">
              <p className=" hidden md:block">
                Além disso, nossa tecnologia de inteligência artificial gera
                perguntas automaticamente, interpreta os dados coletados e
                fornece recomendações práticas para otimizar a experiência dos
                seus clientes e aumentar seus resultados. Tome decisões baseadas
                em insights reais e leve seu negócio ao próximo nível com dados
                que fazem a diferença!
              </p>
              <Image
                src={dataAnalysis}
                alt="..."
                width={350}
                className="hidden md:block"
              />
            </div> */}
          </p>
        </div>
      ),
    },
    {
      title: "Impulsione com soluções de software personalizadas!",
      content: (
        <div className="flex flex-col gap-4">
          <div className="bg-light-blue-200 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
            <Grip className="text-white" size={28} />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8 leading-7">
            Em um ambiente de negócios em constante evolução, onde a inovação e
            a competitividade são essenciais, soluções genéricas não bastam. É
            por isso que desenvolvemos softwares personalizados, projetados para
            atender às necessidades específicas da sua empresa, aumentando a
            eficiência operacional e garantindo maior produtividade.
            <div>
              <br />
            </div>
            <div className="flex items-start gap-2">
              <p className="hidden md:block">
                Nossas soluções são escaláveis e flexíveis, acompanhando o
                crescimento do seu negócio e se adaptando às mudanças do
                mercado. Além disso, oferecemos tecnologias inovadoras que
                proporcionam uma vantagem competitiva, diferenciando sua empresa
                com plataformas intuitivas e uma experiência do usuário
                impecável. Nosso compromisso é transformar tecnologia em um
                diferencial estratégico, ajudando sua empresa a alcançar novos
                patamares de sucesso
              </p>
            </div>
          </p>
        </div>
      ),
    },
    {
      title: "Automatize processos para estar um passo à frente!",
      content: (
        <div className="flex flex-col gap-4">
          <div className="bg-light-yellow-100 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
            <PieChart className="text-white" size={28} />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8 leading-7">
            Imagine um futuro onde sua empresa opera com a precisão quase que
            perfeita, onde a eficiência é a norma e o crescimento é inevitável.
            Esse futuro não é uma utopia distante, mas uma realidade tangível
            alcançada através da automação de processos. <br />
            Ao invés de desperdiçar recursos preciosos em tarefas manuais e
            repetitivas, invista em um sistema que impulsiona a produtividade,
            reduz custos e eleva a satisfação dos seus clientes a patamares
            inéditos.
            <div className="flex items-start gap-2">
              <p className="hidden md:block">
                A automação de processos transcende a simples substituição de
                tarefas manuais por sistemas digitais; é uma transformação
                estratégica que redefine a eficiência e o crescimento do seu
                negócio.
              </p>
            </div>
          </p>
        </div>
      ),
    },

    {
      title:
        "Com o poder da Inteligência Artificial construa o negócio do futuro!",
      content: (
        <div className="flex flex-col gap-4">
          <div className="bg-light-green-100 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
            <TrendingUp className="text-white" size={28} />
          </div>
          <p className="text-neutral-800  dark:text-neutral-200 font-normal mb-8 leading-7">
            Imagine um negócio que não segue tendências — as cria. Um negócio
            que entende as necessidades de seus clientes antes mesmo que eles
            expressem, entregando experiências personalizadas como se cada
            interação fosse feita sob medida. Onde processos fluem sem atrito,
            as decisões são tomadas com precisão e a inovação pulsa em cada
            detalhe.
            <div className="flex items-start gap-2">
              <p className="hidden md:block">
                Pense em chatbots que não apenas respondem, mas se conectam como
                verdadeiros assistentes pessoais. Sistemas que não só analisam
                dados, mas antecipam o futuro com a precisão. Ferramentas que
                liberam sua equipe para o que realmente importa: criatividade,
                estratégia e crescimento.
              </p>
            </div>
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Image src={figure} alt="..." className="absolute right-0" />
      <Timeline data={data} />
    </div>
  );
};

export default TimelineSolutions;
