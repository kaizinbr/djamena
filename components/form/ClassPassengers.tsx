"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Plus, Minus, User } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { set } from "date-fns";
import { fi } from "date-fns/locale";

import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
// import {animals} from "./data";

const FormSchema = z.object({
    class: z.string(),
    adults: z.number().gte(1).lte(8),
    childs: z.number(),
});

export function ClassPass({
    classSelected,
    setClassSelected,
    setClassValue,
    classValue,
    adults,
    setAdults,
    child,
    setChild,
}: {
    classSelected: string;
    setClassSelected: (value: string) => void;
    setClassValue: (value: string) => void;
    classValue: string;
    adults: number;
    setAdults: (value: number) => void;
    child: number;
    setChild: (value: number) => void;
}) {
    // const [classValue, setClassValue] = useState("1");
    // const [classSelected, setClassSelected] = useState("Econômica");
    const [passengersValue, setPassengersValue] = useState("1");

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }

    const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setClassValue(e.target.value);
    };

    return (
        <Popover>
            <PopoverTrigger className="w-full max-w-xs" asChild>
                <Button
                    variant="outline"
                    className={`
                    rounded-xl
                    bg-stone-800/50
                    border-stone-800/50 hover:bg-stone-700/75 hover:border-stone-800/75
                `}
                >
                    <User className="mr-3 size-4" />{classSelected}, {adults} Adultos, {child} Menores
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className={`
                
                rounded-xl
                w-auto bg-stone-700/75 backdrop-blur-md border-stone-700/50  
                 border 
            `}
            >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-6"
                    >
                        <FormField
                            control={form.control}
                            name="class"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-3 items-center gap-4 text-stone-100">
                                    <FormLabel>Classe</FormLabel>
                                    <div className="flex w-full col-span-2 flex-col gap-2">
                                        <Select
                                            aria-label="Select an animal"
                                            variant="bordered"
                                            placeholder="Select an animal"
                                            selectedKeys={[classValue]}
                                            className="max-w-xs border-stone-700"
                                            classNames={{
                                                trigger:
                                                    "border-stone-600 bg-stone-800/70",
                                                value: "text-stone-100",
                                            }}
                                            onChange={handleSelectionChange}
                                        >
                                            <SelectItem key={1} value={1}>
                                                Econômica
                                            </SelectItem>
                                            <SelectItem key={2} value={3}>
                                                Econômica premium
                                            </SelectItem>
                                            <SelectItem key={3} value={3}>
                                                Executiva
                                            </SelectItem>
                                            <SelectItem key={4} value={4}>
                                                Primeira classe
                                            </SelectItem>
                                        </Select>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="adults"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-2 items-center gap-4">
                                    {/* <FormLabel>Classe</FormLabel> */}

                                    <div className="flex flex-col">
                                        <FormLabel>Adultos</FormLabel>
                                        <span className="text-xs font-normal">
                                            Acima de 18 anos
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <Button
                                            onClick={() => {
                                                if (adults > 1) {
                                                    setAdults(adults - 1);
                                                }
                                            }}
                                            variant="outline"
                                            type="button"
                                            className="px-2 border-2 border-stone-600 bg-stone-800/70"
                                        >
                                            <Minus />
                                        </Button>
                                        <span className="px-2 w-9 flex justify-center items-center">
                                            {adults}
                                        </span>
                                        <Button
                                            onClick={() => {
                                                if (adults < 5) {
                                                    setAdults(adults + 1);
                                                }
                                            }}
                                            variant="outline"
                                            type="button"
                                            className="px-2 border-2 border-stone-600 bg-stone-800/70"
                                        >
                                            <Plus />
                                        </Button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="childs"
                            render={({ field }) => (
                                <FormItem className="grid grid-cols-2 items-center gap-4">
                                    {/* <FormLabel>Classe</FormLabel> */}

                                    <div className="flex flex-col">
                                        <FormLabel htmlFor="classSelector">
                                            Menores
                                        </FormLabel>
                                        <span className="text-xs font-normal">
                                            Até os 17 anos
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <Button
                                            onClick={() => {
                                                if (child > 0) {
                                                    setChild(child - 1);
                                                }
                                            }}
                                            variant="outline"
                                            type="button"
                                            className="px-2 border-2 border-stone-600 bg-stone-800/70"
                                        >
                                            <Minus />
                                        </Button>
                                        <span className="px-2 w-9 flex justify-center items-center">
                                            {child}
                                        </span>
                                        <Button
                                            onClick={() => {
                                                if (child < 3) {
                                                    setChild(child + 1);
                                                }
                                            }}
                                            variant="outline"
                                            type="button"
                                            className="px-2 border-2 border-stone-600 bg-stone-800/70"
                                        >
                                            <Plus />
                                        </Button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </PopoverContent>
        </Popover>
    );
}
