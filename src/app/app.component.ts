import {Component, Output} from '@angular/core';
import {IGuess} from "./models/iguess";
import {GuestService} from "./services/guest.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guess'; // Fuori blocco di una funzione. (analogo alla const)
  info = {
    name: 'Stefan',
    birthdate: new Date('24/09/1990')
  };

  guest: IGuess = {
    firtsName: 'Stefan',
    lastName: 'Ilic',
    birthDate: new Date().toString(),
    company: 'Pc System'
  };

  guestsObs = this.guestService.index().do(console.log);
  // guestsObs = this.guestService.index();
  guests: IGuess[];

  constructor(
    private readonly guestService: GuestService
  ) {
    // this.postID = 0;
    // const hi = "Hi";
    // this.title = `${hi} ${this.title}`;

    this.guestService.index().subscribe(
      (res) => {
        console.log('la risposta del server: ', res);
        this.guestsObs = this.guestService.index();
      });

    //// Equivalente a riga25
    // this.title = hi + ' ' + this.title;
    // this.title = [hi, this.title].join(' ');
    //this.onAddGuestListeer(' ');
  }

  /* Observable list modifier*/
  onAddGuestListeer(args: string) {
    this.guestService.post(this.guest).subscribe(
      (res) => this.guests = res
    );
  }



  onDelete(id: string) {
    this.guestService.removeGuest(id).subscribe((res) => this.guests = res);
  }
  // printLet() {
  //   let test = 'test';
  //   if (true) {
  //     test = 'test2';
  //   }
  //
  //   console.log(test);
  //   return test;
  // }


  // destruct() {
  //   const info2 = { ... this.info };
  //   // this.info.firtsName = 'aaa';
  //
  //   // imposta il nome. Poi carica il resto dall'oggetto scritto dopo.
  //   const info3 = {firtsName: 'ciao', ... this.info};
  //   // guarda se ce il nome nell'oggetto passato, altrimenti assegna come default quello secondo.
  //   const info4 = { ... this.info, name: 'ciao'};
  //
  //   console.log(this.info);
  //   console.log(info2);
  // }

  arrow() {
    return () => {
      console.log('arrow');
    }
  }

  // promise() {
  //   return new Promise(
  //     (resolve, reject) => {
  //       setTimeout(
  //         () => {
  //           resolve();
  //         }, 5000
  //       )
  //     }
  //   )
  // }

  /*
    Deep copy example:

    ciao = { pippo: 'ciao' };
    const copyCiao = { ...this.ciao };

    Info sui tipi e' contenuta in un file *.d.ts
    (e' possibile crearlo manualmente.)

    Modulo:
    Snippet di codice. Possibile esportarlo e renderlo accessibile da altri componenti,
    Moduli sono legati da una struttura ad albero.

    TODO: LF saas & scss

    LF: Npm @types
    (Attenzione, scaricare anche le librerie coi tipi. Il type fa da ponte tra js e ts)

   */


}
