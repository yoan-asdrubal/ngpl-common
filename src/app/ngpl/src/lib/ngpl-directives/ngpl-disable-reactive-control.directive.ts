import {NgControl} from '@angular/forms';
import {Directive, Input, Optional, Output} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Directive({
  selector: '[ngplDisableControl]'
})
export class NgplDisableReactiveControlDirective {
  @Output() stateChange = new ReplaySubject(1);

  constructor(@Optional() private ngControl: NgControl) {
  }

  @Input() set dfDisableControl(condition: boolean) {
    const action = condition ? 'disable' : 'enable';
    if (!!this.ngControl && !!this.ngControl.control) {
      this.ngControl.control[action]();
      this.stateChange.next(condition);
    }
  }

}
