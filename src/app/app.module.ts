import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import {HttpClientModule } from '@angular/common/http';
import { ReservationCustomPipePipe } from './reservation-custom-pipe.pipe';
import { ReservationLoginComponent } from './reservation-login/reservation-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationCustomPipePipe,
    ReservationLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReservationModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
