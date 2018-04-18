import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IGuess} from "../../models/iguess";
import {FormGroup} from "@angular/forms";

const companies = [
  'PC SYSTEM',
  'GLUE LABS'
];


@Component({
  selector: 'app-td-guest-form',
  templateUrl: './td-guest-form.component.html',
  styleUrls: ['./td-guest-form.component.scss']
})
export class TdGuestFormComponent implements OnInit {
  @Output('formData') formEmitter = new EventEmitter<any>();

  readonly companies = companies;
  readonly guest: IGuess = {
    firtsName: null,
    lastName: null,
    birthDate: new Date().toString()
  };

  /**********************************************************/

  constructor() { }

  ngOnInit() { }

  /**********************************************************/

  onAddGuest(guest) {
    // console.log(form)
    this.formEmitter.emit(guest);
  }
}
