import React from "react";
import { sectors, services } from "@/data/services";
import { assistence } from "@/data/assistence";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

function page() {
  return (
    <>
      <section className="border-b border-[var(--line-invert)] bg-navy-950 text-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            invert
            subtitle="Serviços"
            title="Suporte integrado sob um único parceiro de confiança."
            lede="Da chegada ao porto ao regresso a casa da tripulação, cobrimos cada etapa do ciclo operacional offshore. Escolha um serviço para ver o detalhe."
          />
        </div>
      </section>

      <section className="bg-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <SectionHeading
            subtitle="Setores que apoiamos"
            title="Suporte flexível ao longo de toda a cadeia de valor offshore."
          />
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {assistence.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
