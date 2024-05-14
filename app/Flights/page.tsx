"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function Flights() {
  const [position, setPosition] = useState("bottom")

 const age=[
   "Adults18+","Studentsover 18","Youths12-17","Children2-11","Toddlers in own seatunder 2","Infants on lapunder 2"
 ]

 const classes=["Economy" ,"Premium Economy"  ,"Business" ,"First","Multiple"]

  return (
    <section className='w-full bg-[#f7f7f7] h-screen'>
      <div className=" mx-auto max-w-7xl    p-6 lg:px-8 ">
        <h1 className='font-semibold text-3xl mt-10 '>
          Where do you want to go?</h1>
        <div className="mt-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="One Way">One Way</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Return">Return</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Multi City">Multi City</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          {/*  */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                {age.map((item,index)=>(<DropdownMenuRadioItem key={index} value={item}>{item}</DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          {/*  */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                {classes.map((item, index) => (<DropdownMenuRadioItem key={index} value={item}>{item}</DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>



      </div>
    </section>
  )
}

