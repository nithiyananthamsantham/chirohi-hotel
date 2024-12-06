import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservationsList: Reservation [] = [];
  reservationNameList: string[] = [];
  constructor(private reservationService: ReservationService){

  }

  ngOnInit(): void {
    this.reservationService.getResrvations().subscribe(reservations => {
      this.reservationsList = reservations

      const objectA = {name: "AAA", age: 30}
      const objectB = {address: "9831 Bradford grove Dr tx", phone: 123456789}

      
      const mergeObjs = {...objectA, ...objectB}
  
      console.log(mergeObjs);
      
    } );

    this.reservationService.getNameList().subscribe(nameStr =>{

      this.reservationNameList = nameStr;
    })

  }

  deleteReservation(id: string){
    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log("Deleted!!!!!")
    })
  }


}
