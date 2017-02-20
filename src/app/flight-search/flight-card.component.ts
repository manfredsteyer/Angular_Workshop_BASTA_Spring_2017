import { Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Flight } from '../entities/flight';

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html'
})
export class FlightCardComponent implements OnInit, OnChanges {

    constructor() {
        console.debug('ctor', this.item, this.selected);
    }

    ngOnInit(): void {
        console.debug('init', this.item, this.selected);

    }

    ngOnChanges(changes: SimpleChanges): void {
        console.debug('changes', this.item, this.selected);
    }

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    select() {
        // this.selected = true;
        this.selectedChange.emit(true);
    }

    deselect() {
        // this.selected = false;
        this.selectedChange.emit(false);
    }

}