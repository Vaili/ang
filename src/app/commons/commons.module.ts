import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatCardModule, MatDialogModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { GuessListComponent } from './guess-list/guess-list.component';
import { SimpleguessComponent } from './simpleguess/simpleguess.component';
import {DirectivesModule} from "../directives/directives.module";
import { AddGuestButtonComponent } from './add-guest-button/add-guest-button.component';
import {PipesModule} from "../pipes/pipes.module";
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { TdGuestFormComponent } from './td-guest-form/td-guest-form.component';
import { DdGuestFormComponent } from './dd-guest-form/dd-guest-form.component';

const components = [
  GuessListComponent,
  SimpleguessComponent,
  AddGuestButtonComponent,
  SimpleDialogComponent,
  TdGuestFormComponent,
  DdGuestFormComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    DirectivesModule,
    MatButtonModule,
    PipesModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [ SimpleDialogComponent ]
})
export class CommonsModule { }
