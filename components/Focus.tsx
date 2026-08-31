import React from 'react'

const Focus = () => {
  return (
    <section>
        <div className="px-4 sm:px-8 md:px-12">
            <div className='grid grid-cols-1'>
                <h1 className="text-xl text-secundaria font-bold uppercase"> Foco Geográfico </h1>
                <span className="flex w-fit text-secundaria font-medium px-4 py-1 rounded-full border border-principal bg-principal/10 mb-4 text-[11px]"> Angola no coração da nossa operação </span>
                <div>
                    <ul className='flex flex-col gap-4'>
                        <li><span className='text-principal'>Mercado principal</span> Angola</li>
                        <li><span className='text-principal'>Foco regional</span> África Ocidental</li>
                        <li><span className='text-principal'>Capacidade</span> suporte a campanhas internacionais de offshore por meio de coordenação local e redes de parceiros</li>
                        <li><span className='text-principal'>Nosso objetivo</span>  é tornar as operações offshore mais fáceis, rápidas e eficientes para nossos clientes.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Focus
