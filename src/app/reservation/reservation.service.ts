import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  //private apiUrl = "http://localhost:3001";
  private apiUrl = "http://localhost:9191";
  private reservations: Reservation [] = [];

  // constructor() {
  //   let savedReservation = localStorage.getItem("reservations");
  //   this.reservations = savedReservation? JSON.parse(savedReservation) : [];

  //  }

  constructor(private http: HttpClient){

  }

  // CRUD
  getResrvations(): Observable<Reservation[]>{
    //return this.reservations;

    return this.http.get<Reservation[]>(this.apiUrl+"/getReservationList");
  }

  getNameList(): Observable<string[]>{
    //return this.reservations;

    return this.http.get<string[]>(this.apiUrl+"/reservationNameList");
  }

  getReservationById(id: string): Observable<Reservation>{
    return this.http.get<Reservation>(this.apiUrl+"/reservation/"+id);
  }
  

  addReservation(reservation: Reservation): Observable<void> {

    const headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
      })
    };
   
    return this.http.post<void>(this.apiUrl + "/reservation" , reservation, headers);
  }

  deleteReservation(id: string): Observable<void> {
    // let index = this.reservations.findIndex(res => res.id === id);
    // this.reservations.splice(index,1);
   // localStorage.setItem("reservations", JSON.stringify(this.reservations));
   return this.http.delete<void>(this.apiUrl+ "/reservation/"+id)

  }
  updateReservation(id: string, updateReservation: Reservation): Observable<void> {
    // let index = this.reservations.findIndex(res => res.id === id);
    // this.reservations[index] = updateReservation;
   // localStorage.setItem("reservations", JSON.stringify(this.reservations));

   return this.http.put<void>(this.apiUrl + "/updateReservation/"+id , updateReservation);
  }
}
