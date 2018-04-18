import {HostBinding, Input, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseOnClickDirective } from './collapse-on-click.directive';
import { AppHighlightDirective } from './app-highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ CollapseOnClickDirective, AppHighlightDirective ],
  exports: [ CollapseOnClickDirective, AppHighlightDirective ]
})
export class DirectivesModule { }
