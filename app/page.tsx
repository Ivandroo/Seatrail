import Commitment from "@/components/Commitment";
import Focus from "@/components/Focus";
import Hero from "@/components/Hero";
import Husbandry from "@/components/Husbandry";
import Services from "@/components/Services";
import Whoweare from "@/components/Whoweare";
import Whyseatrail from "@/components/Whyseatrail";

import SectionHeading from "@/components/SectionHeading";
import { sectors } from "@/data/services";


export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex min-h-dvh flex-col mb-4">
        <Hero />
      </div>
      <div id="whoweare">
        <Whoweare />
      </div>
      <div id="servicos">
        <Services />
      </div>
      <div className="flex flex-col w-full gap-8 py-6 justify-between sm:grid sm:grid-cols-2 md:grid-cols-3">
        <Commitment />
        <Whyseatrail />
        <Focus />
      </div>
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
