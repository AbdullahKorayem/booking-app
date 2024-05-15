'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { CalendarPlus2, CarFront, Clock3 } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from 'date-fns'
import { Calendar } from "./ui/calendar";



export const formSchema = z.object({
    location: z.string().min(2).max(50),
    datesOne: z.object({
        from: z.date(),
        to: z.date(),
    }),
    datesTwo: z.object({
        from: z.date(),
        to: z.date(),
    }),
    TimeOne: z.string(),
    TimeTwo: z.string(),

});


export default function CarRentalForm() {

    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            location: "",
            datesOne: {
                from: undefined,
                to: undefined
            },
            datesTwo: {
                from: undefined,
                to: undefined
            },
            TimeOne: "09:00",
            TimeTwo: "09:00"
        },

    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col lg:flex-row lg:max-w-7xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg ">
                {/* search */}
                <div className="grid w-full lg:max-w-sm items-center gap-1.5 ">
                    <FormField control={form.control}
                        name="location"
                        render={({ field }) => (<FormItem>
                            <FormLabel className="text-white flex">
                                Pick-up location
                                <CarFront className="ml-2 h-4 w-4 text-white" />

                            </FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input placeholder="London, UK" {...field} />
                            </FormControl>

                        </FormItem>)} />
                </div>
                {/*  pickup Date */}
                <div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
                    <FormField control={form.control} name="datesOne" render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-white">Pick Up Date</FormLabel>
                            <FormMessage />

                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            id="date"
                                            name="datesOne"
                                            variant="outline"
                                            className={`w-full lg:w-[300px] justify-start text-left font-normal gap-2 text-black ${field.value?.from ? "text-muted-foreground" : ""
                                                }`}
                                        >
                                            <CalendarPlus2 color="black" size={22} className="gap-1 h-4 opacity-50" />
                                            {field.value?.from ? (
                                                field.value?.to ? (
                                                    <>

                                                        {format(field.value?.from, "LLL dd, yyyy")} - {format(field.value?.to, "LLL dd, yyyy")} -{" "}
                                                        {format(field.value?.to, "LLL dd, yyyy")}
                                                    </>
                                                ) : (
                                                    format(field.value?.from, "LLL dd, yyyy")
                                                )
                                            ) : (
                                                <span className="">Select Your Dates</span>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        initialFocus
                                        mode="range"
                                        selected={field.value}
                                        defaultMonth={field.value?.from}
                                        onSelect={field.onChange}
                                        numberOfMonths={2}
                                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))} />
                                </PopoverContent>
                            </Popover>
                        </FormItem>
                    )}
                    />

                </div>
                {/*  pickup ---------------Time  */}
                <div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
                    <FormField control={form.control} name="TimeOne" render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-white">Time</FormLabel>
                            <FormMessage />

                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            id="Time"
                                            name="TimeOne"
                                            variant="outline"
                                            className={`lg:w-[100px] justify-start text-left text-black font-normal gap-2`}
                                        >
                                            <Clock3 color="black" size={22} className="text-black" />
                                            {field.value ? (
                                                <span>{field.value}</span>
                                            ) : (
                                                <span className="">Select Time</span>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Input type="time" {...field} id="TimeOne" name="TimeOne" min="09:00" max="18:00" required />
                                </PopoverContent>
                            </Popover>
                        </FormItem>
                    )}
                    />
                </div>

                {/*  pickup ---------------Date  */}
                <div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
                    <FormField control={form.control} name="datesTwo" render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-white">Drop-off Date</FormLabel>
                            <FormMessage />

                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            id="date"
                                            name="datesTwo"
                                            variant="outline"
                                            className={`w-full lg:w-[300px] justify-start text-left font-normal gap-2 ${field.value?.from ? "text-muted-foreground" : ""
                                                }`}
                                        >
                                            <CalendarPlus2 color="black" size={22} className="gap-1 h-4 opacity-50" />
                                            {field.value?.from ? (
                                                field.value?.to ? (
                                                    <>

                                                        {format(field.value?.from, "LLL dd, yyyy")} - {format(field.value?.to, "LLL dd, yyyy")} -{" "}
                                                        {format(field.value?.to, "LLL dd, yyyy")}
                                                    </>
                                                ) : (
                                                    format(field.value?.from, "LLL dd, yyyy")
                                                )
                                            ) : (
                                                <span className="">Select Your Dates</span>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        initialFocus
                                        mode="range"
                                        selected={field.value}
                                        defaultMonth={field.value?.from}
                                        onSelect={field.onChange}
                                        numberOfMonths={2}
                                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))} />
                                </PopoverContent>
                            </Popover>
                        </FormItem>
                    )}
                    />

                </div>

                {/*  pickup ---------------Time  */}
                <div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
                    <FormField control={form.control} name="TimeTwo" render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-white">Time</FormLabel>
                            <FormMessage />

                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            id="date"
                                            name="TimeTwo"
                                            variant="outline"
                                            className={` lg:w-[100px] justify-start text-left font-normal gap-2 text-black `}
                                        >
                                            <Clock3 color="black" size={22} className="gap-1 h-4 opacity-50" />
                                            {field.value ? (
                                                <span>{field.value}</span>
                                            ) : (
                                                <span className="">Select Time</span>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Input type="time" id="TimeTwo" {...field} name="TimeTwo" min="09:00" max="18:00" required />
                                </PopoverContent>
                            </Popover>
                        </FormItem>
                    )}
                    />


                </div>
                <div className="mt-auto">
                    <Button type="submit" className="bg-blue-500 text-base">
                        Search
                    </Button>
                </div>
            </form>

        </Form>
    )
}

