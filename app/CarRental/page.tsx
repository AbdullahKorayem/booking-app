import CarRentalForm from '@/components/CarRentalForm';
import React from 'react';
import Image from 'next/image'; // Import Image from next/image

export default function CarRental() {
  const carRents = [
    { name: "Budget", path: "https://cdn2.rcstatic.com/sp/images/suppliers/62_logo_200.png" },
    { name: "Avis", path: "https://cdn2.rcstatic.com/sp/images/suppliers/47_logo_200.png" },
    { name: "Enterprise", path: "https://cdn2.rcstatic.com/sp/images/suppliers/482_logo_200.png" },
    { name: "Sixt", path: "https://cdn2.rcstatic.com/sp/images/suppliers/207_logo_200.png" },
    { name: "Caldera", path: "https://cdn2.rcstatic.com/sp/images/suppliers/67_logo_200.png" },
    { name: "Thrifty", path: "https://cdn2.rcstatic.com/sp/images/suppliers/227_logo_200.png" },
    { name: "Hertz", path: "https://cdn2.rcstatic.com/sp/images/suppliers/137_logo_200.png" },
    { name: "Surprice", path: "https://cdn2.rcstatic.com/sp/images/suppliers/1463_logo_200.png" },
    { name: "Autocandia Rent a Car", path: "https://cdn2.rcstatic.com/sp/images/suppliers/3321_logo_200.png" }
  ];
  const services = [
    {
      name: "We’re here for you",
      path: "https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-traveller/CustomerService.png",
      description: "Providing customer support in over 30 languages"
    },
    {
      name: "Free cancellation",
      path: "https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-traveller/FreeCancellation.png",
      description: "On most bookings, up to 48 hours before pick-up"
    },
    {
      name: "5 million+ reviews",
      path: "https://t-cf.bstatic.com/design-assets/assets/v3.109.0/illustrations-traveller/Reviews.png",
      description: "By verified customers"
    }
  ];



  return (
    <>
      <div className="bg-[#013b94]">
        <div className="mx-auto max-w-8xl p-6 lg:px-8 text-white">
          <section className="max-w-7xl mx-auto p-6">
            <h2 className="font-semibold text-5xl text-white">Car hire for any kind of trip</h2>
            <h3 className="text-white py-5 text-xl">Great deals at great prices, from the biggest car hire companies</h3>
          </section>

          <section className="m-4 mt-0 -mb-12 px-2 lg:px-4">
            <CarRentalForm />
          </section>
        </div>
      </div>

      <section className="mx-auto max-w-7xl p-6 lg:px-8 mt-10">
        <section>
          <h1 className='text-3xl font-semibold'>
            Popular car hire brands
          </h1>
          <div className='flex gap-2 items-center'>
            {carRents.map((car, index) => (
              <div key={index} className='p-4 items-center text-center'>
               
                <Image src={car.path} alt={car.name} width={200} height={200} className='border-[.5px] rounded-sm' />
                <h6 className='text-sm font-thin mt-4'>{car.name}</h6>
              </div>
            ))}
          </div>
        </section>
      </section>


      <section className='bg-[#f5f5f5] h-[200]'>
        <section className="mx-auto max-w-7xl p-6 lg:px-8 mt-10">
    
          <div className='flex gap-2 items-center  justify-around'>
            {services.map((car, index) => (
              <div key={index} className='p-4 items-center text-center flex'>

                <Image src={car.path} alt={car.name} width={75} height={75} className='rounded-sm' />
                <section className='ml-4 flex flex-col text-left'>
                  <h6 className='font-semibold text-xl mt-4'>{car.name}</h6>
                  <p className='text-md font-thin mt-4'>{car.description}</p>
                </section>

              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
