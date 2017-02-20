import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../flight-search/flight.service';
import { Flight } from '../entities/flight';

@Component({
    templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {

    id: string;
    flight: Flight;
    message: string = "";

    constructor(
        private flightService: FlightService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(p => {
            this.id = p['id'];
            this.load();
        })
    }

    private load() {
        this.flightService.loadById(this.id).subscribe(
            (flight: Flight) => {
                this.flight = flight;
                this.message = "Flug geladen";
            },
            (err) => {
                console.error(err);
                this.message = "Fehler beim Laden: " + err.text();
            }
        )
    }

    save() {
        this
            .flightService
            .save(this.flight)
            .subscribe(
                (flight: Flight) => {
                    this.flight = flight;
                    this.message = "Gespeichert!";
                },
                (err) => {
                    console.error(err);
                    this.message = "Fehler beim Speichern: " + err.text();
                }
            );
    }

}