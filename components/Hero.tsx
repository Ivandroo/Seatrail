import { ArrowBigRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-1 flex-col w-full '>
        <div id='container'>
            <div className='flex py-4 px-2 sm:px-6 md:px-8 bg-linear-to-t from-secundaria'>
                <div className='max-w-lg flex flex-col gap-4 '>
                    <h1 className=' text-5xl font-medium text-neve'>Transforme suas expectativas em resultados com ajuda da <span className='text-principal font-bold'>seatrail</span></h1>
                    <p className='text-base text-slate-300'>A seatrail é uma empresa especializada em fornecer soluções de transporte e logística para o setor offshore, com foco em segurança, eficiência e qualidade.</p>
                    <Link href="/sobre" className="flex w-fit gap-2 whitespace-nowrap border border-amber-500 bg-amber-500 px-7 py-2 text-sm font-semibold text-navy-950 transition-colors hover:bg-transparent hover:text-amber-500">
                        Saiba mais
                        <ArrowBigRight />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
