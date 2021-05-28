import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngplControlErrorContainer]'
})
export class NgplControlErrorContainerDirective {

  constructor(public vcr: ViewContainerRef) {
  }

}
