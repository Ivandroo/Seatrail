"use client";

import { useState } from "react";
import { services } from "@/data/services";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-teal-500 bg-fog-50 p-8">
        <p className="font-display text-lg font-bold text-navy-950">
          Mensagem enviada.
        </p>
        <p className="mt-2 text-sm text-navy-900/70">
          Obrigado pelo contacto. A nossa equipa responde dentro de 1 dia
          útil.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[var(--line)] p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm">
          <span className="text-xs font-semibold text-navy-900/70">Nome</span>
          <input
            required
            name="name"
            type="text"
            className="mt-2 w-full border border-[var(--line)] bg-white px-4 py-2.5 text-navy-950 outline-none focus-visible:border-teal-500"
          />
        </label>
        <label className="text-sm">
          <span className="text-xs font-semibold text-navy-900/70">Empresa</span>
          <input
            name="company"
            type="text"
            className="mt-2 w-full border border-[var(--line)] bg-white px-4 py-2.5 text-navy-950 outline-none focus-visible:border-teal-500"
          />
        </label>
      </div>

      <label className="mt-6 block text-sm">
        <span className="text-xs font-semibold text-navy-900/70">Email</span>
        <input
          required
          name="email"
          type="email"
          className="mt-2 w-full border border-[var(--line)] bg-white px-4 py-2.5 text-navy-950 outline-none focus-visible:border-teal-500"
        />
      </label>

      <label className="mt-6 block text-sm">
        <span className="text-xs font-semibold text-navy-900/70">
          Serviço de interesse
        </span>
        <select
          name="service"
          defaultValue=""
          className="mt-2 w-full border border-[var(--line)] bg-white px-4 py-2.5 text-navy-950 outline-none focus-visible:border-teal-500"
        >
          <option value="">Selecione um serviço (opcional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-6 block text-sm">
        <span className="text-xs font-semibold text-navy-900/70">Mensagem</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full border border-[var(--line)] bg-white px-4 py-2.5 text-navy-950 outline-none focus-visible:border-teal-500"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 w-full border border-navy-950 bg-navy-950 px-6 py-3.5 text-sm font-semibold text-fog-50 transition-colors hover:bg-teal-600 hover:border-teal-600 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "A enviar…" : "Enviar mensagem"}
      </button>

      {status === "error" && (
        <p className="mt-4 text-sm text-amber-600">
          Não foi possível enviar agora. Tente novamente ou escreva para
          operacoes@seatrail.co.ao.
        </p>
      )}
    </form>
  );
}
