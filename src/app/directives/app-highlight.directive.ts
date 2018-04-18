import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
})
export class AppHighlightDirective {
  @HostBinding('style.display') display;

  @Input() index: number;
  show = false;

  @HostListener('click') onClick() {
    console.log(this.index);
    const descriptionContent = document.getElementById(`guest-description-${this.index}`);

    this.show = !this.show;
    descriptionContent.style.display = this.show ? 'block' : 'none';

    console.log(descriptionContent);
  }

  constructor() {  }

}
