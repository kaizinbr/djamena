"use client";

import React, { useState } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import {
    Check,
    ChevronsUpDown,
    PlaneTakeoff,
    PlaneLanding,
} from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import axios from "axios";

async function getAirports({
    keyword,
    page,
}: {
    keyword: string;
    page?: number;
}) {
    const supabase = createClient();

    // If the page number is not provided, default to 1
    const pageNumber = page ? page : 1;
    const firstIndex = (pageNumber - 1) * 50;
    const lastIndex = pageNumber * 50 - 1;

    let { data: airportsByName, error } = await supabase
        .from("airports")
        .select("*")
        .or(
            `name.ilike.*${keyword}*,municipality.ilike.*${keyword}*,iata_code.ilike.*${keyword}*`
        ) // Search by name or municipality
        .neq("type", "heliport")
        .neq("iata_code", null)
        .order("iso_country", { ascending: true })
        .range(firstIndex, lastIndex);

    if (airportsByName === null || airportsByName.length == 0) {
        console.log("No airports found for the search term:", keyword);
        return null;
    }

    // Fetch the total number of airports

    const { count } = await supabase
        .from("airports")
        .select("*", { count: "exact", head: true })
        .or(`name.ilike.*${keyword}*,municipality.ilike.*${keyword}*`) // Search by name or municipality
        .neq("type", "heliport")
        .neq("iata_code", null)
        .order("iso_country", { ascending: true });

    console.log("Total airports:", count);

    const totalPages = Math.ceil(count! / 50);

    const resObj = {
        status: "success",
        length: count,
        pagination: {
            current: pageNumber,
            total: totalPages,
            next: totalPages > pageNumber ? pageNumber + 1 : null,
            prev: pageNumber > 1 ? pageNumber - 1 : null,
        },
        data: airportsByName,
    };

    console.log(resObj);

    return resObj;

    // const res = await axios.get(`https://api.api-ninjas.com/v1/airports?name=${keyword}&city=${keyword}&region=${keyword}`, {
    //     headers: {
    //         'X-Api-Key': key
    //       },
    // });
    // const res = await amadeus.client.get("/v1/reference-data/locations", {
    //     keyword,
    //     subType: "AIRPORT,CITY",
    // });

    // const filteredAirports = res.data.filter((item: any, index: number, array: any[]) => {
    //     return array.findIndex((element: any) => element.iataCode === item.iataCode) === index && item.subType === "AIRPORT";
    // });

    // // console.log(filteredAirports);
    // return filteredAirports;

    // console.log(res.data);
    // return res.data;
}

function capitalizeFirstLetter(string: string) {
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getAirportName(airport: any) {
    const stateCode =
        airport.iso_region != undefined
            ? airport.iso_region.slice(3, airport.iso_region.length)
            : "";

    return `${airport.name}, ${airport.municipality} - ${stateCode}, ${airport.iso_country}`;
}

export function SearchDeparture({
    departure,
    setDeparture,
}: {
    departure: string;
    setDeparture: Function;
}) {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState(false);
    const [airports, setAirports] = React.useState([]);
    let timeoutId: NodeJS.Timeout;

    return (
        <Autocomplete
            items={airports}
            aria-label="Destino"
            scrollShadowProps={{
                isEnabled: false,
            }}
            classNames={{
                base: `w-full  max-w-xs justify-start text-left font-normal bg-stone-800/50
                    border-stone-800/50 data-[hover=true]:bg-stone-700/75 data-[hover=true]:border-stone-800/75
                    data-[hover=true]:text-primary-foreground focus:bg-stone-700/75 focus:border-stone-800/75
                    rounded-xl transition-all duration-200 ease-in-out
                `,
            }}
            inputProps={{
                classNames: {
                    input: "ml-1",
                    inputWrapper: `w-full justify-start text-left font-normal bg-transparent
                        data-[hover=true]:bg-stone-700/75 data-[hover=true]:border-stone-800/75 data-[hover=true]:text-primary-foreground 
                        data-[focus=true]:bg-stone-700/75 data-[focus-visible=true]:border-stone-800/75
                        rounded-xl transition-all duration-200 ease-in-out    
                    `,
                },
            }}
            listboxProps={{
                hideSelectedIcon: true,
                itemClasses: {
                    base: [
                        "data-[selectable=true]:focus:bg-stone-700",
                        "data-[selected=true]:bg-amber-500/50",
                    ],
                },
            }}
            popoverProps={{
                offset: 10,
                classNames: {
                    base: "rounded-xl",
                    content: `w-full p-0 bg-stone-700/75 backdrop-blur-md border-stone-700/50  
                        text-primary-foreground border rounded-xl`,
                },
            }}
            startContent={
                <div className="flex flex-row">
                    <PlaneTakeoff className="mr-2 h-4 w-4" />
                    <span className="text-sm">Origem:</span>
                </div>
            }
            // selectedKey={destination}
            onSelectionChange={(item: any) => {
                let iataCode;
                if (item == null) {
                    return;
                } else {
                    // iataCode = item.slice(0, 3);
                    setDeparture(item);
                }
                console.log(iataCode);
            }}
            onKeyUp={(event: any) => {
                let inputValue = (event.target as HTMLInputElement).value;
                clearTimeout(timeoutId);
                timeoutId = setTimeout(async () => {
                    console.log(inputValue);
                    if (inputValue == "") {
                        console.log("empty");
                    } else {
                        const resObj: any = await getAirports({
                            keyword: inputValue,
                        });
                        if (resObj == null) {
                            console.log(
                                "No airports found for the search term:",
                                inputValue
                            );
                        } else {
                            setAirports(resObj.data);
                        }
                    }
                }, 2000);

                // setValue(inputValue)
            }}
            // prevent stopPropagation error
            onKeyDown={(e: any) => e.continuePropagation()}
        >
            {(airport: any) => (
                <AutocompleteItem
                    key={airport.iata_code}
                    textValue={getAirportName(airport)}
                >
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <p className="max-w-4/5 w-4/5 text-wrap">
                                {getAirportName(airport)}
                            </p>
                            <p className="text-xs text-right text-muted-foreground w-1/5">
                                {airport.iata_code}
                            </p>
                        </div>
                        <p className="text-xs text-right text-muted-foreground w-1/5">
                            Aeroporto
                        </p>
                    </div>
                </AutocompleteItem>
            )}
        </Autocomplete>
    );
}

export function SearchArrival({
    destination,
    setDestination,
}: {
    destination: string;
    setDestination: Function;
}) {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState(false);
    const [airports, setAirports] = React.useState([]);
    let timeoutId: NodeJS.Timeout;

    return (
        <Autocomplete
            items={airports}
            aria-label="Destino"
            scrollShadowProps={{
                isEnabled: false,
            }}
            classNames={{
                base: `w-full  max-w-xs justify-start text-left font-normal bg-stone-800/50
                    border-stone-800/50 data-[hover=true]:bg-stone-700/75 data-[hover=true]:border-stone-800/75
                    data-[hover=true]:text-primary-foreground focus:bg-stone-700/75 focus:border-stone-800/75
                    rounded-xl transition-all duration-200 ease-in-out
                `,
            }}
            inputProps={{
                classNames: {
                    input: "ml-1",
                    inputWrapper: `w-full justify-start text-left font-normal bg-transparent
                        border-stone-800/50 
                        data-[hover=true]:bg-stone-700/75 data-[hover=true]:border-stone-800/75 data-[hover=true]:text-primary-foreground 
                        data-[focus=true]:bg-stone-700/75 data-[focus-visible=true]:border-stone-800/75
                        rounded-xl transition-all duration-200 ease-in-out    
                    `,
                },
            }}
            listboxProps={{
                hideSelectedIcon: true,
                itemClasses: {
                    base: [
                        "data-[selectable=true]:focus:bg-stone-700",
                        "data-[selected=true]:bg-amber-500/50",
                    ],
                },
            }}
            popoverProps={{
                offset: 10,
                classNames: {
                    base: "rounded-xl",
                    content: `w-full p-0 bg-stone-700/75 backdrop-blur-md border-stone-700/50  
                        text-primary-foreground border rounded-xl`,
                },
            }}
            startContent={
                <div className="flex flex-row">
                    <PlaneLanding className="mr-2 h-4 w-4" />
                    <span className="text-sm">Destino:</span>
                </div>
            }
            // selectedKey={destination}
            onSelectionChange={(item: any) => {
                let iataCode;
                if (item == null) {
                    return;
                } else {
                    // iataCode = item.slice(0, 3);
                    setDestination(item);
                }
                console.log(iataCode);
            }}
            onKeyUp={(event: any) => {
                let inputValue = (event.target as HTMLInputElement).value;
                clearTimeout(timeoutId);
                timeoutId = setTimeout(async () => {
                    console.log(inputValue);
                    if (inputValue == "") {
                        console.log("empty");
                    } else {
                        const resObj: any = await getAirports({
                            keyword: inputValue,
                        });
                        if (resObj == null) {
                            console.log(
                                "No airports found for the search term:",
                                inputValue
                            );
                        } else {
                            setAirports(resObj.data);
                        }
                    }
                }, 2000);

                // setValue(inputValue)
            }}
            // prevent stopPropagation error
            onKeyDown={(e: any) => e.continuePropagation()}
        >
            {(airport: any) => (
                <AutocompleteItem
                    key={airport.iata_code}
                    textValue={getAirportName(airport)}
                >
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <p className="max-w-4/5 w-4/5 text-wrap">
                                {getAirportName(airport)}
                            </p>
                            <p className="text-xs text-right text-muted-foreground w-1/5">
                                {airport.iata_code}
                            </p>
                        </div>
                        <p className="text-xs text-right text-muted-foreground w-1/5">
                            Aeroporto
                        </p>
                    </div>
                </AutocompleteItem>
            )}
        </Autocomplete>
    );
}
