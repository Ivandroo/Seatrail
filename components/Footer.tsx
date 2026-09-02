import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line-invert)] bg-navy-950 text-fog-50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo.jpeg" alt="SEATRAIL" width={36} height={36} />
              <span className="font-display text-base font-bold">SEATRAIL</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-fog-100/70">
              Apoio operacional, logístico e de mão de obra para a indústria
              offshore e marítima em Angola e África Ocidental.
            </p>
            <p className="mt-6 text-xs tracking-wide text-teal-300">
              ANGOLA · ÁFRICA OCIDENTAL · APOIO OFFSHORE
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-fog-100/50">Serviços</p>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="text-fog-100/80 hover:text-amber-500"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servicos" className="text-teal-300 hover:text-amber-500">
                  Ver todos os serviços →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-fog-100/50">Empresa</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-fog-100/80 hover:text-amber-500">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-fog-100/80 hover:text-amber-500">
                  Contacto
                </Link>
              </li>
              <li className="pt-2 text-fog-100/50">
                Parte do Global Digital Marketeiro Group
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--line-invert)] pt-6 text-xs text-fog-100/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} SEATRAIL Offshore Support Services.</span>
          <span>Pessoas fiáveis. Coordenação fiável. Apoio offshore fiável.</span>
        </div>
      </div>
    </footer>
  );
}
