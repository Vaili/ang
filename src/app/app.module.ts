import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { CommonsModule } from "./commons/commons.module";
import { DirectivesModule } from "./directives/directives.module";
import { ServicesModule } from "./services/services.module";
import { ExtendDataPipe } from './pipes/extend-data.pipe';
import {PipesModule} from "./pipes/pipes.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    DirectivesModule,
    FormsModule,
    ServicesModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
