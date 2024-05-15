import { Disclosure, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react';
import toGetAllCountries from '@/lib/countries';
import Image from 'next/image';
import { SWMIcon } from 'react-swm-icon-pack';
import { DialogTitle } from '@/components/ui/dialog';

export default function DialogCountries() {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const [countries, setCountries] = useState<[]>([]);

    useEffect(() => {
        async function fetchCountries() {
            try {
                const data = await toGetAllCountries();
                setCountries(data.data);
               
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        }

        fetchCountries();

        
    }, []);

    const products = [
        {
            title: "Genius loyalty programme",
            items: [
                { name: "Genius loyalty programme", icon: "Dna" }
            ]
        },
        {
            title: "List your property",
            items: [
                { name: "List your property", icon: "HomeHospital" }
            ]
        },
        {
            title: "Help and support",
            items: [
                { name: "Contact Customer Service", icon: "UserCheck" },
                { name: "Partner dispute", icon: "Users" }
            ]
        },
        {
            title: "Inspiration",
            items: [
                { name: "Seasonal and holiday deals", icon: "Offer" },
                { name: "Travel articles", icon: "Explore" }
            ]
        },
        {
            title: "Settings and legal",
            items: [
                { name: "About Booking.com", icon: "InfoCircle" },
                { name: "Careers", icon: "CalendarUser" },
                { name: "Become an affiliate", icon: "CheckCircle" },
                { name: "Press centre", icon: "Windows" },
                { name: "Privacy & cookies", icon: "Virus" },
                { name: "Terms and conditions", icon: "DocumentCheck" },
                { name: "Sittings", icon: "Settings" },
                { name: "Log Out", icon: "Logout" }
            ]
        }
    ];


    return (

        <div className="w-full px-4 pt-16 h-[80vh] overflow-y-auto">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 overflow-y-auto">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-300 px-4 py-2 text-left text-sm font-medium text-[#013b94] hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                                <span>What is your Country?</span>
                                <SWMIcon
                                    name={open ? "ChevronUp" :"ChevronDown" }
                                    set="broken"
                                    color="blue"
                                    strokeWidth={1.8}
                                    size={20}
                                    className={`transform ${open ? 'rotate-180' : ''} h-5 w-5 text-[#013b94]`}
                                />

                            </Disclosure.Button>
                            <Transition
                                enter="transition duration-200 ease-in-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-100 ease-in-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                <div className="mt-2 overflow-auto grid grid-cols-2 gap-2 max-h-96 " >
                                    {countries ? (
                                        countries?.map((item: any) => (
                                            <div key={item.name} className="flex space-x-3  items-center hover:bg-gray-100 p-3 rounded-md ">
                                                <div className="w-25 h-25 rounded-full overflow-hidden">
                                                    <Image
                                                        className="rounded-full"
                                                        src={item.flag}
                                                        alt="Country Flag"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>
                                                <p>{item.name}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                </div>

                            </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
                <div>
                    {products.map((item, index) => (
                        <div key={index}>
                            <h1>{item.title}</h1>
                            {item.items.map((subItem, subIndex) => (
                                <div key={subIndex} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                                        <SWMIcon name={subItem.icon} set="broken" color="#013B94" strokeWidth={1.8} size={27} />
                                        
                                    </div>
                                        <span>{subItem.name}</span>
                                 
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

               
            </div>
        </div>




    );
}
