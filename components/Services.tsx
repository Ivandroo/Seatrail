import { services } from "@/data/services";
import Image from "next/image";
import React from "react";

function Services() {
  return (
    <section>
        <div className="px-4">
            <h1 className="text-xl text-secundaria font-bold mb-4 uppercase"># Nossos serviços</h1>
            <div className="flex flex-col w-full gap-8 justify-between sm:grid sm:grid-cols-2 md:grid-cols-3">
                {services.map((service) => (
                    <div key={service.title} className="flex flex-col justify-between shadow p-1 rounded-md hover:shadow-secundaria/30 transition-all ease-in-out">
                        <div className="relative w-full min-h-52 mb-1">
                            <Image src={service.image} alt={service.title} fill style={{ objectFit: 'cover', borderRadius: '4px '}} />
                        </div>
                        <h3 className="text-xl text-secundaria px-2 font-medium">{service.title}</h3>
                        <p className="text-sm px-2 text-gray-500">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Services;
