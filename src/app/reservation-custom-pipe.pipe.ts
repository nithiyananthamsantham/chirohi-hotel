import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reservationCustomPipe'
})
export class ReservationCustomPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
