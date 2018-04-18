import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { CommonsModule } from "./commons/commons.module";
import { DirectivesModule } from "./directives/directives.module";
import { ServicesModule } from "./services/services.module";
import { ExtendDataPipe } from './pipes/extend-data.pipe';
import {PipesModule} from "./pipes/pipes.module";
import {MatDialogModule} from "@angular/material";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    DirectivesModule,
    MatDialogModule,
    FormsModule,
    ServicesModule,
    PipesModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
