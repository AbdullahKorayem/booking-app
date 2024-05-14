import AirPortTaxiForm from '@/components/AirPortTaxiForm'
import React from 'react'


export default function AirPortTaxi() {
  return (
    <div>

      <section className='bg-[#f5f5f5] h-[200]'>
        <section className="mx-auto max-w-7xl p-6 lg:px-8 ">


          <h1 className="font-semibold text-5xl ">Book your airport taxi</h1>
          <p className=" py-5 text-xl">Easy airport transfers to and from your accommodation</p>
          <section>
            <AirPortTaxiForm />

          </section>
        </section>
      
      </section>

    </div>
  )
}

