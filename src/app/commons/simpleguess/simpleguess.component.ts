import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { IGuess } from "../../models/iguess";
import {GuestService} from "../../services/guest.service";

@Component({
  selector: 'app-simpleguess',
  templateUrl: './simpleguess.component.html',
  styleUrls: ['./simpleguess.component.scss']
})
export class SimpleguessComponent implements OnInit {
  @Output('onDelete') deleteEvent = new EventEmitter<string>();
  @Input() guest: IGuess;
  @Input() index: number;
  showDetails = false;
  deleted = false;

  constructor(
    private guestService: GuestService
  ) { }

  ngOnInit() {
  }

  onDeleteGuest() {
    this.deleteEvent.emit(this.guest.id);
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

}
