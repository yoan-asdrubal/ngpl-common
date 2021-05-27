import {Directive, ElementRef, Input, OnInit, Optional} from '@angular/core';

@Directive({
  selector: '[ngplWidth]'
})
export class NgplWidthDirective implements OnInit {
  @Input() dfWidth = '100%';

  constructor(@Optional() private host: ElementRef) {

  }

  ngOnInit(): void {
    const element = this.host.nativeElement as HTMLElement;
    if (!!element && !!element.style) {
      element.style.width = this.dfWidth;
      element.style.maxWidth = this.dfWidth;
    }
  }
}
