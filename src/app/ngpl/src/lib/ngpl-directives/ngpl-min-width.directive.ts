import {Directive, ElementRef, Input, OnInit, Optional} from '@angular/core';

@Directive({
  selector: '[ngplMinWidth]'
})
export class NgplMinWidthDirective implements OnInit {
  @Input() dfMinWidth = '100%';

  constructor(@Optional() private host: ElementRef) {

  }

  ngOnInit(): void {
    const element = this.host.nativeElement as HTMLElement;
    if (!!element && !!element.style) {
      element.style.minWidth = this.dfMinWidth;
    }
  }
}
