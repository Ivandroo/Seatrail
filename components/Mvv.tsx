"use client";
import { HandHelping, ShipIcon, Building2 } from "lucide-react";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useSpring,
} from "framer-motion";

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
      className="mr-3 inline-block"
    >
      {children}
    </motion.span>
  );
};

const Mvv = () => {
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
      <div className="px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-secundaria font-bold mb-4">
            # Quem somos
          </h1>
          <div
            style={{ minHeight: "100vh" }}
            className="flex flex-col gap-6 justify-start items-start text-center"
          >
            <h1
              ref={elementoRef}
              className="text-4xl font-normal text-justify max-w-4xl md:text-5xl md:font-normal"
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
            <div className="flex flex-col w-full justify-center items-center gap-10 bg-neve py-3 px-6 rounded-md shadow sm:max-w-fit sm:grid sm:grid-cols-2 sm:justify-start md:grid md:grid-cols-3 mt-4">
              <div className="flex flex-col gap-1 items-center sm:items-start">
                <h1 className="text-4xl font-bold">2+ <span className=" text-black/30 text-2xl font-medium uppercase">Anos</span></h1>
                <p className="font-light text-sm">Anos de experiência</p>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <h1 className="text-4xl font-bold">5+ <span className="text-2xl opacity-30 font-medium uppercase">col</span></h1>
                <p className="font-light text-sm">Anos de experiência</p>
              </div>
              <div className="flex flex-col gap-1 items-start">
                <h1 className="text-4xl font-bold">10+ <span className="text-2xl opacity-30 font-medium uppercase">con</span></h1>
                <p className="font-light text-sm">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mvv;
