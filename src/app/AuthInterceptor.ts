import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservationService } from './reservation/reservation.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(reservationService: ReservationService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        
        if(token){
            const clonedReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer'+token)
            });

            return next.handle(clonedReq);
        }
        else{
            return next.handle(req);
        }
    }

}