import SearchForm from "@/components/SearchForm";
import { trending_data } from "@/data/trendingData";
import Image from "next/image";


export default function Home() {
  return (
    <main className="bg-[#013b94]">

      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-semibold text-5xl text-white">Find Your Next Stay</h2>
        <h3 className="text-white py-5 text-xl">Seach low Prices on Hotels,Homes And Much More...</h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
     <SearchForm/>
      </section>

      <section className="mx-auto  max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-semibold">Trending Destinations</h3>
          <p className="font-light">
            Most Popular Choices For Travellers From Around The World
          </p>
        </div>
        <div className="flex space-x-4 py-5 overflow-x-scroll ">
          {trending_data?.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer shadow-md rounded-lg p-2">
              <Image
                key={item.id}
                width={300}
                height={200}
                quality={100}
                className=" object-cover rounded-lg pb-2"
                src={item.src}
                alt={item.location}
                
              />


              <p className="font-bold">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
