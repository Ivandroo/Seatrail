import Commitment from "@/components/Commitment";
import Focus from "@/components/Focus";
import Hero from "@/components/Hero";
import Husbandry from "@/components/Husbandry";
import Whoweare from "@/components/Whoweare";
import Whyseatrail from "@/components/Whyseatrail";

import SectionHeading from "@/components/SectionHeading";
import { sectors, CoreServices, services } from "@/data/services";
import Link from "next/dist/client/link";
import ServiceCard from "@/components/ServiceCard";


export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex min-h-dvh flex-col mb-4">
        <Hero />
      </div>
      <div id="whoweare">
        <Whoweare />
      </div>

      <section className="bg-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title="Suporte integrado sob um único parceiro de confiança." subtitle="Serviços principais" />
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

      <div id="husbandry">
        <Husbandry />
      </div>

      {/* Setores */}
      <section className="border-y border-[var(--line-invert)] bg-secundaria text-fog-50">
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
    </main>
  );
}
