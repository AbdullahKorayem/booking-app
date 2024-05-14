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
import { BedDouble ,Baby,Search,UserRound,DoorClosed } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { SWMIcon } from 'react-swm-icon-pack';
import { format } from 'date-fns'
import { Calendar } from "./ui/calendar";



export const formSchema = z.object({
    location: z.string().min(2).max(50),
    dates: z.object({
        from: z.date(),
        to: z.date(),
    }),
    adults: z.string().min(1, { message: "Please Select at least 1 Adult" })
        .max(12, { message: "Max 12 Adults Occupancy" }),
    children: z.string().min(0).max(12, { message: "Max 12 children Occupancy" }),
    rooms: z.string().min(1, { message: "Please Select at least 1 room" })
});


export default function SearchForm() {

    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            location: "",
            dates: {
                from: undefined,
                to: undefined
            },
            adults: "1",
            children: "0",
            rooms: "1"
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg ">

                <div className="grid w-full lg:max-w-sm items-center gap-1.5">
                    <FormField control={form.control}
                        name="location"
                        render={({ field }) => (<FormItem>
                            <FormLabel className="text-white flex">
                                Location
                                <BedDouble className="ml-2 h-4 w-4 text-white" />
                            </FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input placeholder="London, UK" {...field} />
                            </FormControl>

                        </FormItem>)} />
                </div>

                <div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
                    <FormField control={form.control} name="dates" render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="text-white">Dates</FormLabel>
                            <FormMessage />

                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            id="date"
                                            name="dates"
                                            variant="outline"
                                            className={`w-full lg:w-[300px] justify-start text-left font-normal gap-3 ${field.value?.from ? "text-muted-foreground" : ""
                                                }`}
                                        >
                                            <SWMIcon name="CalendarPlus" set="broken" color="black" size={22} className="gap-1 h-4 opacity-50" />
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

                <div className="flex w-full items-center space-x-2">
                    <div className="grid items-center flex-1">
                        <FormField control={form.control} name="adults" render={({ field }) => (<FormItem>
                            <FormLabel className="text-white flex">
                                <UserRound />
                                Adults
                                </FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                        )}
                        />


                    </div>
                    <div className="grid items-center flex-1">
                        <FormField control={form.control} name="children" render={({ field }) => (<FormItem>
                            <FormLabel className="text-white flex gap-1 ">
                                <Baby />
                                Children
                            </FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                        )} />


                    </div>
                    <div className="grid items-center flex-1">
                        <FormField control={form.control} name="rooms" render={({ field }) => (<FormItem>
                            <FormLabel className="text-white flex">
                                <DoorClosed />
                                Rooms
                            </FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                        )} />

                    </div>
                    <div className="mt-auto">
                        <Button type="submit" className="bg-blue-500 text-base">
                            <Search />
                            Search
                        </Button>
                    </div>
                </div>
            </form>

        </Form>
    )
}

