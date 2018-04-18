import { Injectable } from '@angular/core';
import { IGuess } from "../models/iguess";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { environment } from "../../environments/environment";
import 'rxjs/add/operator/map'

const fakeGuest: IGuess[] = [
  {
    id: '1',
    firtsName: 'Stefan',
    lastName: 'Ilic',
    company: 'PcSystem'
  },
  {
    id: '3',
    firtsName: 'Stefann',
    lastName: 'Ilic',
    company: 'PcSystem'
  },
  {
    id: '2',
    firtsName: 'Stefan',
    lastName: 'Ilic',
    company: 'PcSystem'
  }
];

@Injectable()
export class GuestService {
  guests: IGuess[] = [];
  url =  `${environment.apiUrl}/corso`;

  /**************************/
  constructor(
    private httpClient: HttpClient
  ) { }
  /**************************/

  index(): Observable<IGuess[]> {
    return this.httpClient.get(this.url).map((res: IGuess[]) => {
      this.guests = res;
      // Se res non e' vuoto ritorna res, altrimenti lista degli utenti
      return res.length === 0 ? fakeGuest : res;
    });
  }

  post(data: IGuess) {
    return this.httpClient.post(this.url, data).map( (res: IGuess) => {
      this.guests.push(res);
      return this.guests;
    });
  }

  getGuests() {
    return this.guests;
  }

  addGuest(guest: IGuess) {
    this.guests.push(guest);
    return this.guests;
  }

  removeGuest(guestId: string) {
    return this.httpClient.delete(`${this.url}/${guestId}`).map( () => {
      this.guests = this.guests.filter( ({ id }) => id !== guestId);
      return this.guests;
    });
  }
}
