"use client"

import Image from "next/image"
import Link from "next/link"
import { SWMIcon } from 'react-swm-icon-pack';
import { useState, Fragment, useEffect } from "react"
import { Transition, Popover } from "@headlessui/react"
import HeaderDialog from "./HeaderDialog";
import { PlaneTakeoff, CarFront, FerrisWheel, Shell } from "lucide-react";
import { toGetAll } from "@/lib/getAllLocations";
const axios = require('axios');




export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const products = [
        {
            name: "Book a Stay",
            description: "Get a better understanding of where your traffic is coming from.",
            href: "#",
            icon: "Home1"
        },
        {
            name: "Book A Flight",
            description: "Speak directly to your customers in a more meaningful way.",
            href: "Flights",
            icon: "Send2"
        }, {
            name: "Connect Our Support Team",
            description: "Your customers' data will be safe and secure.",
            href: "#",
            icon: "MessageCircleLines"
        }
    ]

    const callsToAction = [
        { name: "Book a Stay", href: "#", icon: "PhoneCall" },
        { name: "Contact Support", href: "#", icon: "Play" }
    ]

    const navLinks = [
        { name: "Flights", href: "Flights", icon: <PlaneTakeoff /> },
        { name: "Car Rentals", href: "CarRental", icon: <CarFront /> },
        { name: "Attractions", href: "Attractions", icon: <FerrisWheel /> },
        { name: "Air Port Taxi", href: "AirPortTaxi", icon: <Shell /> },
    ]

    useEffect(() => {
        async function toGetAll() {
            const options = {
                method: 'GET',
                url: 'https://booking-com15.p.rapidapi.com/api/v1/test',
                mode:'no-cors',
                headers: {
                    'X-RapidAPI-Key': 'ca00eaa66cmshf9a8f2d64e38074p17bd0ejsn9c54345e7e16',
                    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        toGetAll()
    }, [])

    return (
        <header className="bg-[#013B94]">
            <nav className="mx-auto max-w-7xl flex items-center justify-between  p-6 lg:px-8">
                <div className="flex lg:flex-1">

                    <Link href="/" className=" -m-1.5 -p-1.5">
                        <span className="sr-only">Booking.com</span>
                        <Image className="h-12 w-auto " src="/bookingcom.svg" alt="Booking Logo" width={100} height={100} quality={100} />
                    </Link>
                </div>


                <div className="flex lg:hidden">

                    <HeaderDialog mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

                    {/* <SWMIcon name="MenuHamburger" set="broken" color="white" /> */}

                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-2 correctedProperty text-white outline-none">
                            Stays
                            <SWMIcon name="ChevronDown" strokeWidth={2.5} set="broken" color="white" size={22} />
                        </Popover.Button>
                        <Transition as={Fragment}
                            enter="transition ease-out duration-300"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in-out duration-300"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1">
                            {/* Your content here */}
                            <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 ">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div key={item.name} className=" group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100 hover:duration-700">
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200 hover:duration-1000">
                                                <SWMIcon name={item.icon} set="broken" color="#013B94"
                                                    strokeWidth={1.8} size={27} />
                                            </div>

                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-[#013B94]"> {item.name}</a>
                                                <p className="mt-1 text-[#013B94]">
                                                    {item.description}
                                                </p>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 hover:duration-700">
                                    {callsToAction.map((item) => (<a key={item.name} href={item.href} className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-smeibold leading-6 text-[#013B94] hover:bg-gray-200 hover:duration-700">
                                        <SWMIcon name={item.icon} set="broken" color="#013B94"
                                            strokeWidth={1.8} size={27} /> {item.name}
                                    </a>))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    {navLinks.map((item) => (<a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white flex gap-1">{item.name} {item.icon} </a>))}

                </Popover.Group>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                    <a href="#" className="text-sm font-semibold leading-6 text-white flex p-4 gap-3" >
                        <SWMIcon name="Logout" set="broken" color="#fff"
                            strokeWidth={1.8} size={24} /> Log Out</a>
                </div>
            </nav>



        </header>
    )
}

