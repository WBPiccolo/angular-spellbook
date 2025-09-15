import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss'
})
export class Accordion {
  @Input() isOpen: boolean = false
  @Input() header: string = 'accordion header';
  @Input() openHeader: string = this.header;
  @Input() closeHeader: string = this.header;

  @Output() accordionOpened: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle() {
    this.isOpen = !this.isOpen;
    this.accordionOpened.emit(this.isOpen)
  }
}
