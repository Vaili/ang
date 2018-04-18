import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import { IGuess } from "../../models/iguess";

const companies = [
  'PC SYSTEM',
  'GLUE LABS'
];

@Component({
  selector: 'app-dd-guest-form',
  templateUrl: './dd-guest-form.component.html',
  styleUrls: ['./dd-guest-form.component.scss']
})
export class DdGuestFormComponent implements OnInit {
  @Output('formData') newGuest = new EventEmitter<IGuess>();

  guestForm: FormGroup;
  readonly companies = companies;

  /*****************************************************/

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {
    this.guestForm = this.formBuilder.group({
      'firtsName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'company' : new FormControl(null, [Validators.required]),

    })
  }

  ngOnInit() { }

  /*****************************************************/

  onSubmit() {
    let guest: IGuess = {
      firtsName: <string> this.guestForm.controls['firtsName'].value,
      lastName: <string> this.guestForm.controls['lastName'].value,
      company: <string> this.guestForm.controls['company'].value,
      birthDate: new Date().toString()
    };

    this.newGuest.emit(guest);
    this.guestForm.reset();
  }

}
