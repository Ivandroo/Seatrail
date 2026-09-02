import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | SEATRAIL",
  description:
    "Fale com a equipa da SEATRAIL sobre os requisitos operacionais da sua próxima campanha offshore em Angola e África Ocidental.",
};

export default function Contacto() {
  return (
    <>
      <section className="border-b border-[var(--line-invert)] bg-navy-950 text-fog-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            invert
            subtitle="Contacto"
            title="Vamos apoiar a sua próxima operação."
            lede="Pessoas fiáveis. Coordenação fiável. Apoio offshore fiável. Conte-nos os requisitos do seu projeto e a nossa equipa responde com uma solução à medida."
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold text-teal-600">Escritório</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/75">
              Angola — mercado principal
              <br />
              África Ocidental — foco regional
            </p>

            <p className="mt-8 text-xs font-semibold text-teal-600">Email</p>
            <p className="mt-3 text-sm text-navy-900/75">operacoes@seatrail.co.ao</p>

            <p className="mt-8 text-xs font-semibold text-teal-600">Tempo de resposta</p>
            <p className="mt-3 text-sm text-navy-900/75">
              Respondemos a pedidos operacionais dentro de 1 dia útil.
            </p>

            <div className="mt-10 border-l-2 border-amber-500 bg-fog-50 p-5">
              <p className="text-sm text-navy-900/80">
                Para pedidos sensíveis ao tempo — troca de tripulação ou apoio
                portuário urgente — identifique isso no assunto da mensagem.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
