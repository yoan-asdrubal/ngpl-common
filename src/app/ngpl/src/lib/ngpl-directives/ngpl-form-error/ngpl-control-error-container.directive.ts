import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[dfControlErrorContainer]'
})
export class NgplControlErrorContainerDirective {

  constructor(public vcr: ViewContainerRef) {
  }

}
