import { Component } from '@angular/core';
import { Flight } from '../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from './flight.service';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    //providers: [{ provide: FlightService, useClass: FlightService }]
})
export class FlightSearchComponent {

    from: string;
    to: string;

    showSpinner: boolean = false;

    // flights: Array<Flight> = [];
    get flights(): Array<Flight> {
        return this.flightService.flights;
    }

    selectedFlight: Flight;

    basket = {
        "3": true,
        "4": false,
        "5": true
    }

    constructor(
        private flightService: FlightService) {
        console.debug('Hallo vom Konstruktor!');
    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }

    search(): void  {
        this.flightService
            .find(this.from, this.to);
    }

}