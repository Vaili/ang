import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { GuestService } from "./guest.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule ],
  declarations: [],
  providers: [ GuestService ],
})
export class ServicesModule { }
