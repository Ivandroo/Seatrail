import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceCard from "@/components/ServiceCard";
import { assistence } from "@/data/assistence";

export function generateStaticParams() {
  return assistence.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = assistence.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | SEATRAIL`,
    description: service.tagline,
  };
}

export default async function AssistenciaDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = assistence.findIndex((service) => service.slug === slug);
  if (index === -1) return notFound();

  const service = assistence[index];
  const next = assistence[(index + 1) % assistence.length];

  return (
    <>
      <section className="border-b border-[var(--line-invert)] bg-navy-950 text-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <nav className="text-xs text-fog-100/60">
            <Link href="/assistencias" className="hover:text-teal-300">
              Assistência e apoio portuário
            </Link>
            <span className="mx-2">/</span>
            <span className="text-fog-100/80">{service.title}</span>
          </nav>
          <p className="mt-6 text-xs font-semibold text-teal-300">
            {service.code}
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-base text-fog-100/75">
            {service.tagline}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-xs font-semibold text-teal-600">Como apoiamos</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-900/80">
              Coordenamos esta etapa da operação com uma equipa local,
              comunicação clara e acompanhamento próximo das necessidades da
              embarcação.
            </p>
          </div>

          <aside className="h-fit border border-[var(--line)] bg-fog-50 p-7">
            <p className="font-display text-lg font-bold text-navy-950">
              Precisa deste apoio?
            </p>
            <p className="mt-3 text-sm text-navy-900/70">
              Conte-nos os requisitos da sua operação e a nossa equipa prepara
              uma resposta com o enquadramento operacional em Angola e África
              Ocidental.
            </p>
            <Link
              href="/contactos"
              className="mt-6 inline-flex w-full justify-center border border-navy-950 bg-navy-950 px-5 py-3 text-sm font-semibold text-fog-50 transition-colors hover:border-teal-600 hover:bg-teal-600"
            >
              Pedir uma proposta
            </Link>
          </aside>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <p className="text-xs font-semibold text-teal-600">
              Próxima assistência
            </p>
            <Link
              href="/assistencias"
              className="text-sm font-semibold text-navy-950 hover:text-teal-600"
            >
              Ver todas →
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
