import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import 'rxjs/add/operator/debounceTime'

import { IGuess } from "../../models/iguess";
import {Observable} from "rxjs/Observable";

function isName(value: string):ValidatorFn {
  return ((control: FormControl) => {
    if (control.value === value) {
      return null;
    } else {
      return { 'isNameWrong': {value: control.value} };
    }
  });
}

// function isAsyncName(value: string): AsyncValidatorFn {
//   return ((control: FormControl) => {
//     return new Observable(
//       (observer) => {
//         if (control.value === value) {
//           return null;
//         } else {
//           observer.next({'isAsyncName' : {false}})
//         }
//         observer.complete();
//       });
//     });
// }

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
      'firtsName': [null, [], []],
        //new FormControl(null, [Validators.required], /*[isName('Stefan')]*/),
      'lastName': [null, [], []],
        //new FormControl(null, [Validators.required]),
      'company' : [null, [], []],
        //new FormControl(null, [Validators.required]),
      'phoneNumbers': this.formBuilder.array([]),
    });

    this.guestForm.controls['firtsName'].valueChanges.debounceTime(3000).subscribe(
      (res) => console.log(res)
    );
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

  private addPhoneNumber

}
