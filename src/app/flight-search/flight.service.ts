
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { Http, URLSearchParams, Headers } from '@angular/http'; // Netflix
import { BASE_URL } from '../app.tokens';

@Injectable()
export class FlightService {

    constructor(
        private http: Http,
        @Inject(BASE_URL) private baseUrl: string
    ) {
        console.debug('Hallo vom Service-Konstruktor');
    }

    flights: Array<Flight> = [];

    public find(from: string, to: string): void {
        let url = this.baseUrl + "/flight";

        let search= new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        this
            .http
            .get(url, { search, headers })
            .map(resp => resp.json())
            .subscribe(
                (flights) => {
                    this.flights = flights;
                },
                (err) => {
                    console.error(err);
                }
            );

    }

    public loadById(id: string): Observable<Flight> {
        let url = this.baseUrl + "/flight";

        let search= new URLSearchParams();
        search.set('id', id);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
            .http
            .get(url, { search, headers })
            .map(resp => resp.json());

    }

    public save(flight: Flight): Observable<Flight> {
        let url = this.baseUrl + "/flight";

        let headers = new Headers();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');

        return this.http.post(url, flight, { headers })
                    .map(resp => resp.json());

        /*
         .subscribe(
         flight => {

         },
         err => {

         }
         )
         */
    }
}