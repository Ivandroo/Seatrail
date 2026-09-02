import { ArrowBigRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-1 flex-col w-full px-4 pb-2  rounded-md'>
        <div className='rounded-2xl rounded-b-2xl' id='container'>
            <div className='flex py-4 px-2 sm:px-6 md:px-8 bg-linear-to-t from-secundaria'>
                <div className='max-w-lg flex flex-col gap-4 '>
                    <h1 className='text-5xl font-medium text-neve'>Leve seus serviços para outro nível com a <span>seatrail</span></h1>
                    <p className='text-base text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quibusdam excepturi ipsam est minus dicta!</p>
                    <button className='flex w-fit text-destaque justify-center items-center font-medium border gap-2 py-2 px-6'>
                        Saber mais
                        <ArrowBigRight />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
