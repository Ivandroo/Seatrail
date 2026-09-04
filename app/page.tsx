import Hero from "@/components/Hero";
import Whoweare from "@/components/Whoweare";

import SectionHeading from "@/components/SectionHeading";
import { commitments, sectors, services, whySeatrail } from "@/data/services";
import Link from "next/dist/client/link";
import ServiceCard from "@/components/ServiceCard";
import { assistence } from "@/data/assistence";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex min-h-dvh flex-col">
        <Hero />
      </div>
      <div id="whoweare">
        <Whoweare />
      </div>

      <section className="bg-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title="Suporte integrado sob um único parceiro de confiança."
              subtitle="Serviços principais"
            />
            <Link
              href="/servicos"
              className="border border-navy-950 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-navy-950 hover:text-fog-50"
            >
              Ver os 8 serviços
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Setores */}
      <section className="border-y border-[var(--line-invert)] bg-navy-950 text-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            subtitle="Setores que apoiamos"
            title="Suporte flexível ao longo de toda a cadeia de valor offshore."
            invert
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <li
                key={s}
                className="border border-[var(--line-invert)] px-5 py-4 text-sm font-medium text-fog-100/90"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Porquê a SEATRAIL */}
      <section className="bg-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            subtitle="Porquê a SEATRAIL"
            title="Capacidade local. Mentalidade internacional."
          />
          <ul className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {whySeatrail.map((w, i) => (
              <li
                key={w}
                className="flex gap-4 border-t border-[var(--line)] py-4"
              >
                <span className="font-display text-sm font-bold text-teal-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-navy-900/80">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 mb-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              title="Conectando pessoas qualificadas com oportunidades"
              subtitle="Assistência e apoio portuário"
            />
            <Link
              href="/assistencias"
              className="border border-navy-950 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-navy-950 hover:text-fog-50"
            >
              Ver as 8 assistências
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {assistence.slice(0, 4).map((assistence) => (
              <ServiceCard key={assistence.slug} service={assistence} />
            ))}
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="border-t border-[var(--line)] bg-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            subtitle="O nosso compromisso"
            title="Os padrões por trás de cada missão."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="border-l-2 border-amber-500 bg-white p-5"
              >
                <p className="font-display text-base font-bold text-navy-950">
                  {c.title}
                </p>
                <p className="mt-2 text-sm text-navy-900/65">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-navy-950 text-fog-50">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-24 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Vamos apoiar a sua próxima operação.
            </h2>
            <p className="mt-4 text-fog-100/75">
              Pessoas fiáveis. Coordenação fiável. Apoio offshore fiável. Fale
              connosco sobre os requisitos operacionais do seu projeto.
            </p>
          </div>
          <Link
            href="/contactos"
            className="whitespace-nowrap border border-amber-500 bg-amber-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-transparent hover:text-amber-500"
          >
            Pedir uma proposta
          </Link>
        </div>
      </section>
    </main>
  );
}
