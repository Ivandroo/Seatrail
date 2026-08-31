import React from "react";

function Commitment() {
  return (
    <section>
      <div className="px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 ">
          <h1 className="text-xl text-secundaria font-bold uppercase">
            Nosso compromisso
          </h1>
          <span className="flex w-fit text-secundaria font-medium px-4 py-1 rounded-full border border-principal bg-principal/10 mb-4 text-[11px]">
            Os padrões por trás de cada tarefa
          </span>
          <div className="">
            <ul className="flex flex-col gap-4">
              <li>
                <span className="text-principal">Sustentamos </span> 
                nossas operações com uma cultura sólida de segurança e
                consciência de riscos.
              </li>
              <li>
                <span className="text-principal">Buscamos</span> a
                prestação de serviços consistente e profissional.
              </li>
              <li>
                <span className="text-principal">Respeitamos</span> os requisitos legais, do cliente e do setor aplicáveis.
              </li>
              <li>
                <span className="text-principal">Compreendemos</span> a importância de operações offshore sensíveis ao
                fator tempo.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Commitment;
