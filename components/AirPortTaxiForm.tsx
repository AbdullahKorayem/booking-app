"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { format } from 'date-fns'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "@/components/ui/input"
import { Calendar } from "./ui/calendar";

import { toast } from "@/components/ui/use-toast"
import { CalendarPlus2 } from "lucide-react"

export default function AirPortTaxiForm() {

    const FormSchema = z.object({
        type: z.enum(["One Way", "Return"], {
            required_error: "You need to select a trip type.",
        }),
        Destination: z.string(),
        PickUpLocation: z.string(),
        dates: z.object({
            from: z.date(),
            to: z.date(),
        }),
        TimeTwo: z.string().refine((data) => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(data), {
            message: 'Invalid time format. Please use HH:MM format.'
        }),
        Passengers: z.number().min(1, { message: "You need to select at least 1 passenger" }),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            toast({
                title: "Success",
                description: "Form submitted successfully!",
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "There was an error submitting the form.",
            });
        }
    }

    return (


        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg ">

                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem className="space-y-3">
                            <FormLabel>Trip Type</FormLabel>
                            <FormControl className="flex">
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-row space-x-3"
                                >

                                    <FormItem className="flex items-center space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="One Way" />
                                        </FormControl>
                                        <FormLabel className="font-normal">One Way</FormLabel>
                                    </FormItem>


                                    <FormItem className="flex items-center space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Return" />
                                        </FormControl>
                                        <FormLabel className="font-normal">Return</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <div className="grid w-full lg:max-w-sm items-center gap-1.5">
                    <FormField control={form.control}
                        name="PickUpLocation"
                        render={({ field }) => (<FormItem>
                            <FormLabel className="text-white flex">
                                Pick Up Location

                            </FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input placeholder="Pick Up Location" {...field} />
                            </FormControl>

                        </FormItem>)} />
                </div>
                <div className="grid w-full lg:max-w-sm items-center gap-1.5">
                    <FormField control={form.control}
                        name="Destination"
                        render={({ field }) => (<FormItem>
                            <FormLabel className="text-white flex">
                                Destination

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
                                            <CalendarPlus2 />
                                            {field.value?.from ? (
                                                field.value?.to ? (
                                                    <>
                                                        {format(field.value?.from, "LLL dd, yyyy")} - {format(field.value?.to, "LLL dd, yyyy")}
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

                <div className="grid items-center flex-1">
                    <FormField control={form.control} name="Passengers" render={({ field }) => (<FormItem>
                        <FormLabel className="text-white flex gap-1 ">
                            Passengers
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

                        Search
                    </Button>
                </div>

            </form>

        </Form >
    )

}
