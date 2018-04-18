import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IGuess } from "../../models/iguess";
import {GuestService} from "../../services/guest.service";




@Component({
  selector: 'app-guess-list',
  templateUrl: './guess-list.component.html',
  styleUrls: ['./guess-list.component.scss']
})
export class GuessListComponent implements OnInit {
  @Output() deleteEmit = new EventEmitter<string>();
  @Input() fakeGuest = [];

  // onAddGuestListener() {
  //   console.log('Add Guest');
  //
  //   this.fakeGuest.push({
  //     id: '54',
  //     firtsName: 'dsada',
  //     lastName: 'blablaba',
  //     company: 'dsa',
  //   });
  // }

  constructor(
    private readonly guestService: GuestService
  ) {
    // this.fakeGuest = this.guestService.getGuests();
    console.log(this.fakeGuest);
  }

  onDeleteButton(id: string) {
    this.deleteEmit.emit(id);
  }


  ngOnInit() { }
}
