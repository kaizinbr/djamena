"use client";

import { useState } from "react";

import {
    FontBoldIcon,
    FontItalicIcon,
    UnderlineIcon,
} from "@radix-ui/react-icons";
import { ArrowRightLeft, ArrowRight  } from 'lucide-react';

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function RoundTripSelector({
    roundTrip,
    setRoundTrip,
}: {
    roundTrip: boolean;
    setRoundTrip: Function;
}) {
    return (
        <RadioGroup defaultValue="round-trip" className="flex flex-row">
            <div className="flex items-center">
                <RadioGroupItem value="round-trip" id="round-trip" className={`
                    hidden
                `} onClick={() => setRoundTrip(true)}/>
                <Label htmlFor="round-trip"
                    className={`
                    px-4 py-2 rounded-full  border-2 border-stone-700/50
                    transition-colors duration-200 cursor-pointer
                    ${roundTrip ? 'bg-amber-600 border-amber-600' : 'bg-transparent'}
                    text-xs
                    flex flex-col justify-center items-center
                `}
                >
                    Ida e volta</Label>
            </div>
            <div className="flex items-center">
                <RadioGroupItem value="one-way-trip" id="one-way-trip" className={`
                    hidden
                `} onClick={() => setRoundTrip(false)} />
                <Label htmlFor="one-way-trip"
                    className={`
                    px-4 py-2 rounded-full  border-2 border-stone-700/50
                    transition-colors duration-200 cursor-pointer
                    ${!roundTrip ? 'bg-amber-600 border-amber-600' : 'bg-transparent'}
                    text-xs
                    flex flex-col justify-center items-center
                `}>Só ida</Label>
            </div>
        </RadioGroup>
    );
}
