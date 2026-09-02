import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { assistence } from "@/data/assistence";

export const metadata = {
  title: "Assistência e apoio portuário | SEATRAIL",
  description:
    "Coordenação local e assistência operacional para embarcações durante a estadia no porto.",
};

export default function AssistenciasPage() {
  return (
    <>
      <section className="border-b border-[var(--line-invert)] bg-navy-950 text-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            invert
            subtitle="Assistência e apoio portuário"
            title="Coordenação local para operações que não podem parar."
            lede="Do agenciamento à representação local, asseguramos o apoio necessário durante cada escala no porto."
          />
        </div>
      </section>

      <section className="bg-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
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
