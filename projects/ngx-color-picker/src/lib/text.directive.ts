import { Directive, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[text]'
})
export class TextDirective {
  @Input() rg: number;
  @Input() text: any;

  @Output() newValue = new EventEmitter<any>();

  @HostListener('input', ['$event']) inputChange(event: any): void {
    const value = event.target.value;

    if (this.rg === undefined) {
      this.newValue.emit(value);
    } else {
      const numeric = parseFloat(value);

      this.newValue.emit({ v: numeric, rg: this.rg });
    }
  }
}
