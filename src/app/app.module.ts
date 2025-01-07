import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReservationCustomPipePipe } from './reservation-custom-pipe.pipe';
import { AuthInterceptor } from './AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    ReservationCustomPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ReservationModule,
    HttpClientModule
  
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
