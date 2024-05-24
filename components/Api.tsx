"use client";

// var Amadeus = require('amadeus');

import Amadeus from 'amadeus';

var amadeus = new Amadeus({
  clientId: 'TOID4QJiEj13GqlyQTTk77pFlaTNE4Fp',
  clientSecret: 'VSp1GoKV72aespZy'
});



export default function Api() {

    // const response = amadeus.shopping.flightOffersSearch.get({
    //     originLocationCode: 'SYD',
    //     destinationLocationCode: 'BKK',
    //     departureDate: '2024-05-08',
    //     adults: '2'
    // }).then(function(response: { data: any; }){
    //   console.log(response.data);
    // }).catch(function(responseError: { code: any; }){
    //   console.log(responseError.code);
    // });
    return (
        <div className="h-screen flex justify-center items-center">
            <button onClick={() => {
                amadeus.shopping.flightOffersSearch.get({
                    originLocationCode: 'JPA',
                    destinationLocationCode: 'SAO',
                    departureDate: '2024-05-08',
                    adults: '1',
                    travelClass: 'ECONOMY',
                    nonStop: 'true',
                    currencyCode: 'BRL'
                }).then(function(response: { data: any; }){
                  console.log(response.data);
                }).catch(function(responseError: { code: any; }){
                  console.log(responseError.code);
                });
            }}>aperta</button>
        </div>
    )
}