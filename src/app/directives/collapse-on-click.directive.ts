import {Directive, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appCollapseOnClick]'
})
export class CollapseOnClickDirective implements OnChanges {

  @Input() show;
  @HostBinding('style.display') display;

  constructor() {
    console.log('Directive created!');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.show.currentValue && changes.show) {
      this.display = 'block';
    } else {
      this.display = 'none';
    }
  }


}
