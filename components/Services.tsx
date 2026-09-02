import { services } from "@/data/services";
import Image from "next/image";
import React from "react";
import SectionHeading from "./SectionHeading";

function Services() {
  return (
    <section>
        <div className="px-4 sm:px-8 md:px-12">
            <SectionHeading title=" Suporte integrado com um parceiro confiável" subtitle="Nossos serviços" />
            
            <div className="flex flex-col w-full gap-8 justify-between sm:grid sm:grid-cols-2 md:grid-cols-3">
                {services.slice(0, 3).map((service) => (
                    <div key={service.title} className="flex flex-col justify-between shadow p-2 hover:shadow-secundaria/30 transition-all ease-in-out">
                        <div className="relative w-full min-h-52 mb-1">
                            <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover'}} />
                        </div>
                        <h3 className="text-xl text-secundaria font-medium">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Services;
