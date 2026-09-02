import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { assistence } from "@/data/assistence";

export function generateStaticParams() {
  return [...services, ...assistence].map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = [...services, ...assistence].find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | SEATRAIL`,
    description: service.tagline,
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = [...services, ...assistence].findIndex((s) => s.slug === slug);
  if (index === -1) return notFound();

  const service = [...services, ...assistence][index];
  const next = [...services, ...assistence][(index + 1) % [...services, ...assistence].length];

  return (
    <>
      <section className="border-b border-[var(--line-invert)] bg-navy-950 text-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <nav className="text-xs text-fog-100/60">
            <Link href="/servicos" className="hover:text-teal-300">
              Serviços
            </Link>
            <span className="mx-2">/</span>
            <span className="text-fog-100/80">{service.title}</span>
          </nav>
          <p className="mt-6 text-xs font-semibold text-teal-300">{service.code}</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-base text-fog-100/75">{service.tagline}</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-xs font-semibold text-teal-600">O que inclui</p>
            <ul className="mt-6 divide-y divide-[var(--line)] border-t border-[var(--line)]">
              {("bullets" in service ? service.bullets : []).map((b) => (
                <li key={b} className="flex gap-4 py-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber-500"
                  />
                  <span className="text-sm text-navy-900/80 md:text-base">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit border border-[var(--line)] bg-fog-50 p-7">
            <p className="font-display text-lg font-bold text-navy-950">
              Precisa deste serviço?
            </p>
            <p className="mt-3 text-sm text-navy-900/70">
              Conte-nos os requisitos da sua operação e a nossa equipa prepara
              uma resposta com o enquadramento operacional em Angola e África
              Ocidental.
            </p>
            <Link
              href="/contactos"
              className="mt-6 inline-flex w-full justify-center border border-navy-950 bg-navy-950 px-5 py-3 text-sm font-semibold text-fog-50 transition-colors hover:bg-teal-600 hover:border-teal-600"
            >
              Pedir uma proposta
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <p className="text-xs font-semibold text-teal-600">Próximo serviço</p>
            <Link
              href="/servicos"
              className="text-sm font-semibold text-navy-950 hover:text-teal-600"
            >
              Ver todos →
            </Link>
          </div>
          <div className="mt-6 max-w-sm">
            <ServiceCard service={next} />
          </div>
        </div>
      </section>
    </>
  );
}
