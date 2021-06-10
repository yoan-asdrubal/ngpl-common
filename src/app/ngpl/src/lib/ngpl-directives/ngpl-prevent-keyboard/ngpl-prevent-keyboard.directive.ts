import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[ngplPreventKeyboard]'
})
export class NgplPreventKeyboardDirective {

  @Input() ngplPreventKeyboard: boolean;

  constructor() {
  }

  @HostListener('keydown', ['$event'])
  keyDown(event: KeyboardEvent): void {
    if(!!this.ngplPreventKeyboard) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
