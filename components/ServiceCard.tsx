import { Service } from "@/lib/lib";
import Link from "next/link";

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicos/${service.slug}`}
      className="bracket-frame group flex flex-col justify-between border border-[var(--line)] bg-white p-6 transition-colors hover:border-teal-500"
    >
      <div>
        <p className="text-xs font-semibold text-teal-600">{service.code}</p>
        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-navy-950">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-navy-900/65">{service.tagline}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-950 group-hover:text-teal-600">
        Ver detalhes
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}

export default ServiceCard;
