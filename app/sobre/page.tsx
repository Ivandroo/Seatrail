import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { commitments } from "@/data/services";

export const metadata: Metadata = {
  title: "Quem somos | SEATRAIL",
  description:
    "Conheça a SEATRAIL Offshore Support Services: missão, visão, compromisso e foco geográfico em Angola e África Ocidental.",
};

export default function Sobre() {
  return (
    <>
      <section className="border-b border-[var(--line-invert)] bg-navy-950 text-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            invert
            subtitle="Quem somos"
            title="Conhecimento local. Padrão internacional de execução."
            lede="A SEATRAIL Offshore Support Services é uma empresa angolana que presta apoio operacional, logístico e de mão de obra integrado às indústrias offshore e marítima."
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold text-teal-600">Quem somos</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/75">
              Parte do Global Digital Marketeiro Group, a SEATRAIL combina
              conhecimento do mercado local com uma mentalidade de serviço
              internacional.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-teal-600">O que fazemos</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/75">
              Apoiamos os clientes ao longo de todo o ciclo operacional — desde
              a mobilização de pessoal e trocas de tripulação, até ao apoio a
              embarcações, portos e bases em terra.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-teal-600">Grupo</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/75">
              Como parte de uma plataforma de negócio mais ampla, a SEATRAIL
              acede a capacidades complementares mantendo um foco claro no
              apoio offshore.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-fog-50">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2">
          <div>
            <SectionHeading
              subtitle="Missão"
              title="Apoio fiável. Execução eficiente. Parcerias de longo prazo."
              lede="Prestar serviços de apoio dependáveis, responsivos e eficientes em custo, que permitam aos nossos clientes concentrarem-se nas suas operações offshore essenciais. Procuramos entregar cada missão com profissionalismo, consciência de segurança, disciplina operacional e comunicação forte com o cliente."
            />
          </div>
          <div>
            <SectionHeading
              subtitle="Visão"
              title="Construir uma plataforma líder de apoio offshore em África."
              lede="Tornar-se um parceiro de apoio offshore reconhecido em Angola e África Ocidental, conhecido pela fiabilidade, agilidade, conformidade e qualidade de serviço. Desenvolvemos continuamente a nossa equipa, rede de fornecedores e capacidades operacionais."
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading subtitle="O nosso compromisso" title="Os padrões por trás de cada missão." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {commitments.map((c) => (
              <div key={c.title} className="border-l-2 border-amber-500 bg-fog-50 p-5">
                <p className="font-display text-base font-bold text-navy-950">{c.title}</p>
                <p className="mt-2 text-sm text-navy-900/65">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line-invert)] bg-navy-950 text-fog-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
          <SectionHeading
            invert
            subtitle="Foco geográfico"
            title="Angola no centro das nossas operações."
            lede="Mercado principal: Angola. Foco regional: África Ocidental. Capacidade para apoiar campanhas offshore internacionais através de coordenação local e redes de parceiros."
          />
          <div className="flex flex-col justify-center border-t border-[var(--line-invert)] pt-8 md:border-l md:border-t-0 md:pl-16 md:pt-0">
            <p className="text-sm text-fog-100/75">
              O nosso objetivo é tornar as operações offshore mais fáceis,
              rápidas e eficientes para os nossos clientes — em qualquer ponto
              da costa angolana ou da região da África Ocidental.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
