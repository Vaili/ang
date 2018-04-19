import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
})
export class AppHighlightDirective {
  // @HostBinding('style.display') display;
  //
  // @Input() index: number;
  // @HostListener('click') onClick() {
  //   // console.log(this.index);
  //   this.setContentDescription(this.show);
  //   this.show = !this.show;
  //   // console.log(descriptionContent);
  // }
  //
  // constructor() {
  //   this.setContentDescription(false);
  // }
  //
  // show = true;
  //
  // private setContentDescription(showDescription: boolean) {
  //   console.log(this.index);
  //   const descriptionContent = document.getElementById(`guest-description-${this.index}`);
  //   console.log(descriptionContent);
  //   descriptionContent.style.display = showDescription ? 'block' : 'none';
  // }
}
