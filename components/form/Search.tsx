"use client";
import DatePicker from "@/components/DatePicker";
import CitySearch from "@/components/CitySearch";
import { SearchDeparture, SearchArrival } from "./SearchInputs";
import { getFlights } from "./Api";

import { useState, useEffect } from "react";
import { RoundTripSelector } from "./RoundTripSelector";
import { ClassPass } from "./ClassPassengers";
import {Spinner} from "@nextui-org/react";

import FlightCard from "./FlightCard";

// import data from "./searchrestype2.json";

export default function Search() {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [roundTrip, setRoundTrip] = useState(true);
    const [classValue, setClassValue] = useState("1");
    const [classSelected, setClassSelected] = useState("Econômica");
    const [adults, setAdults] = useState(1);
    const [child, setChild] = useState(0);

    const [data, setData] = useState<any>({});
    const [error, setError] = useState("");
    const [empty, setEmpty] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        console.log(origin, destination, departureDate, returnDate, roundTrip, classValue, adults, child);
        if (origin === "" || destination == "" || departureDate == "" || (returnDate == "" && roundTrip)) {
            alert("Preencha todos os campos");
            setLoading(false);
            return;
        } else {
            setShowResults(false);
            setData({});
            const prevData = await getFlights(
                origin,
                destination,
                departureDate,
                returnDate,
                roundTrip,
                classValue,
                adults,
                child
            );
            console.log(prevData);
            if (prevData.error != undefined) {
                setError(prevData.error);
                setLoading(false);
                setShowResults(false);
            
            } else if (prevData.data){
                setData(prevData.data);
                setLoading(false);
                setShowResults(true);
            } else if (prevData.search_information.flights_results_state == 'Fully empty') {                
                setError('Nenhum voo encontrado');
                setLoading(false);
                setShowResults(false);
            }
        }
    };

    return (
        <div className="flex flex-col py-10 w-full">
            <form className=" flex flex-col justify-center items-center mb-10 px-4 gap-2">
                <RoundTripSelector
                    roundTrip={roundTrip}
                    setRoundTrip={setRoundTrip}
                />
                <SearchDeparture departure={origin} setDeparture={setOrigin} />
                <SearchArrival
                    destination={destination}
                    setDestination={setDestination}
                />
                <DatePicker
                    disabled={false}
                    spanText={"Ida"}
                    setDate={setDepartureDate}
                    date={departureDate}
                />
                <DatePicker
                    disabled={!roundTrip}
                    spanText={"Volta"}
                    setDate={setReturnDate}
                    date={returnDate}
                />
                <ClassPass
                    classSelected={classSelected}
                    setClassSelected={setClassSelected}
                    setClassValue={setClassValue}
                    classValue={classValue}
                    adults={adults}
                    setAdults={setAdults}
                    child={child}
                    setChild={setChild}
                />
                <button
                    type="button"
                    onClick={handleSubmit}
                    className={`
                        bg-gradient-to-br from-amber-600 to-amber-400
                        via-yellow-300
                        text-stone-900 font-bold
                        rounded-xl py-4
                        w-full max-w-xs
                    `}
                >
                    Buscar viagens
                </button>
            </form>
            <div className="flex flex-col w-full px-4 gap-8">
                {showResults ? (
                    <div className="flex flex-col w-full gap-8">
                        {data.best_flights != undefined
                            ? data.best_flights.map(
                                  (flight: any, index: number) => (
                                      <div className="" key={index}>
                                          <FlightCard
                                              data={flight}
                                              bestFlights={true}
                                          />
                                      </div>
                                  )
                              )
                            : null}
                        {data.other_flights.map(
                            (flight: any, index: number) => (
                                <div className="" key={index}>
                                    <FlightCard
                                        data={flight}
                                        bestFlights={false}
                                    />
                                </div>
                            )
                        )}
                    </div>
                ) : loading ? (
                    <div className="flex justify-center items-center w-full h-96">
                        <Spinner color="warning"/>

                    </div>
                ) : error ? (
                    <div className="flex justify-center items-center w-full h-96">
                        <h1>{error}</h1>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
