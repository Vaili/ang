import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import {MatButtonModule, MatCardModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { GuessListComponent } from './guess-list/guess-list.component';
import { SimpleguessComponent } from './simpleguess/simpleguess.component';
import {DirectivesModule} from "../directives/directives.module";
import { AddGuestButtonComponent } from './add-guest-button/add-guest-button.component';
import {PipesModule} from "../pipes/pipes.module";

const components = [
  GuessListComponent,
  SimpleguessComponent,
  AddGuestButtonComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    DirectivesModule,
    MatButtonModule,
    PipesModule
  ],
  exports: [...components],
  declarations: [
    ...components,
    SimpleguessComponent,
    AddGuestButtonComponent
  ]
})
export class CommonsModule { }
