import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-guest-button',
  templateUrl: './add-guest-button.component.html',
  styleUrls: ['./add-guest-button.component.scss']
})
export class AddGuestButtonComponent implements OnInit {

  @Output() add = new EventEmitter<any>();

  onClick() {
    this.add.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
