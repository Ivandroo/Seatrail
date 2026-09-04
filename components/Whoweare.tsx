"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";
import { Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}

// Componente para animar uma palavra individual
const Word = ({ children, range, progress }: WordProps) => {
  // Mapeia o progresso do scroll do container para a opacidade desta palavra específica
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <motion.span
      style={{ opacity, willChange: "opacity", transform: "translateZ(0)" }}
      className=" text-4xl font-light leading-tight md:text-5xl mr-3 inline-block"
    >
      {children}
    </motion.span>
  );
};

const Whoweare = () => {
  const elementoRef = useRef<HTMLHeadingElement>(null);

  const texto =
    "A SEATRAIL Offshore Support Services é uma empresa angolana que fornece suporte operacional, logístico e de mão de obra integrado para os setores offshore e marítimo. ";
  const palavras = texto.split(" ");

  const { scrollYProgress } = useScroll({
    target: elementoRef,
    offset: ["start 80%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 20,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section>
        <div className="flex flex-col">
          
          <div
            style={{ minHeight: "50vh" }}
            className="flex flex-col px-6 py-6 sm:px-8 md:px-12 justify-start items-start"
          >
            <div className='sm:w-6xl sm:mx-auto sm:px-6'>

              <SectionHeading title="" subtitle="Quem somos" />
              <h1
                ref={elementoRef}
                className="text-4xl max-w-4xl md:text-5xl"
              >
                {palavras.map((palavra, index) => {
                  const start = index / palavras.length;
                  const end = start + 1 / palavras.length;
                  return (
                    <Word
                      key={index}
                      range={[start, end]}
                      progress={smoothProgress}
                    >
                      {palavra}
                    </Word>
                  );
                })}
              </h1>
            </div>
          </div>
            {/* Quem somos / Missão */}
            <section className="border-b border-[var(--line)] bg-white">
              <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16">
                <SectionHeading
                  subtitle=""
                  title="Um parceiro local de confiança para operações offshore."
                  lede="A SEATRAIL Offshore Support Services é uma empresa angolana que presta apoio operacional, logístico e de mão de obra integrado às indústrias offshore e marítima."
                />
                <div className="border-t border-[var(--line)] pt-8 md:border-l md:border-t-0 md:pl-16 md:pt-0">
                  <p className="text-xs font-semibold text-teal-600">Missão</p>
                  <p className="mt-3 text-base text-navy-900/75">
                    Prestar serviços de apoio fiáveis, responsivos e eficientes
                    em custo, para que os nossos clientes se concentrem nas suas
                    operações offshore essenciais.
                  </p>
                  <p className="mt-6 text-xs font-semibold text-teal-600">
                    Visão
                  </p>
                  <p className="mt-3 text-base text-navy-900/75">
                    Tornar-se uma plataforma de referência em apoio offshore em
                    Angola e África Ocidental, reconhecida pela fiabilidade,
                    agilidade, conformidade e qualidade de serviço.
                  </p>
                </div>
              </div>
            </section>
      </div>
    </section>
  );
};

export default Whoweare;
