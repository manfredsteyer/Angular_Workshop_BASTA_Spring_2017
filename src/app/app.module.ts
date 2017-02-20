import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight.service';
import { BASE_URL } from './app.tokens';
import { CityPipe } from './shared/pipes/city.pipe';
import { FlightCardComponent } from './flight-search/flight-card.component';
import { HomeComponent } from './home/home.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { AppRouterModule } from './app.routes';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    FlightSearchComponent,
    CityPipe,
    FlightCardComponent,
    HomeComponent,
    PassengerSearchComponent,
    FlightEditComponent
  ],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at/api' },
    FlightService
  ],
  bootstrap: [        
     AppComponent 
  ]
})
export class AppModule {
}

