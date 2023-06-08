import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent {
  @Input()
  quantity: number = 1;

  @Output() quantityEvent = new EventEmitter();

  constructor() { }

  add() {
    this.quantity += 1;
    this.quantityEvent.emit(this.quantity);
  }

  remove() {
    if (this.quantity > 1) {
      this.quantity -=1;
    }
    this.quantityEvent.emit(this.quantity);
  }
}
