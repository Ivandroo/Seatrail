import React from "react";
import Image from "next/image";
import { services } from "@/data/services";
import { assistence } from "@/data/assistence";
import SectionHeading from "./SectionHeading";

const Husbandry = () => {
  return (
    <section>
      <div className="bg-secundaria px-4 py-8 sm:px-8 md:px-12">
        
        <SectionHeading title="Conectando pessoas qualificadas com oportunidades" subtitle="Assistência e apoio portuario" invert />

        <div className="flex flex-col w-full gap-8 justify-between sm:grid sm:grid-cols-2 md:grid-cols-3">
          {assistence.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between border border-neve/10 p-2 hover:shadow-neve/30 transition-all ease-in-out"
            >
              <div className="relative w-full min-h-52 mb-1">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-xl text-neve font-medium">
                {service.title}
              </h3>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Husbandry;
