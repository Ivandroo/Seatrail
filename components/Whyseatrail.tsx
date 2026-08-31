import React from "react";

const Whyseatrail = () => {
  return (
    <section>
      <div className="px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1">
          <h1 className="text-xl text-secundaria font-bold uppercase">
            Porque Nós
          </h1>
          <span className="flex w-fit text-secundaria font-medium px-4 py-1 rounded-full border border-principal bg-principal/10 mb-4 text-[11px]">
            Capacidade local. Mentalidade internacional.
          </span>
          <div>
            <ul className="flex flex-col gap-4">
              <li><span className="text-principal">Conhecimento</span> do mercado angolano e rede operacional</li>
              <li><span className="text-principal">Comunicação</span> ágil e coordenação rápida</li>
              <li><span className="text-principal">Serviços</span> integrados por meio de um ponto de contato único
              </li>
              <li><span className="text-principal">Soluções</span> flexíveis adaptadas às exigências do projeto</li>
              <li><span className="text-principal">Foco</span> em conformidade, qualidade e confiabilidade operacional
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyseatrail;
