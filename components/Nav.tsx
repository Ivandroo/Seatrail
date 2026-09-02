"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/sobre", label: "Quem somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contactos", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-fog-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/logo.jpeg" alt="SEATRAIL" width={40} height={40} priority />
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-navy-950">
            SEATRAIL
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative py-1 text-sm font-medium text-navy-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-500 after:transition-all after:duration-200 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contactos"
            className="border border-navy-950 bg-navy-950 px-4 py-2 text-sm font-semibold text-fog-50 transition-colors hover:bg-teal-600 hover:border-teal-600"
          >
            Pedir proposta
          </Link>
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-[2px] w-6 bg-navy-950 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-[2px] w-6 bg-navy-950 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[2px] w-6 bg-navy-950 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-[var(--line)] bg-fog-50 px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-[var(--line)] py-3 text-sm font-medium text-navy-900"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contactos"
            className="mt-4 border border-navy-950 bg-navy-950 px-4 py-2 text-center text-sm font-semibold text-fog-50"
            onClick={() => setOpen(false)}
          >
            Pedir proposta
          </Link>
        </nav>
      )}
    </header>
  );
}
