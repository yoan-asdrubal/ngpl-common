import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[ngplDecimalNumber]'
})
export class NgplDecimalNumberDirective {
  private regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-'];

  constructor(private el: ElementRef) {
  }

  @Input() set ngplDecimalNumber(decimal) {
    const expresion = `^\\d*\\.?\\d{0,${decimal}}$`;
    this.regex = new RegExp(expresion, 'g');
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}
