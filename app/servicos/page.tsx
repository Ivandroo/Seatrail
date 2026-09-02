import React from "react";
import { services } from "@/data/services";
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
    </>
  );
}

export default page;
