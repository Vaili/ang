import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExtendDataPipe} from "./extend-data.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExtendDataPipe],
  exports: [ExtendDataPipe]

})
export class PipesModule { }
