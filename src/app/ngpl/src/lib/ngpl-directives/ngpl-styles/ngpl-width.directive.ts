import {Directive, ElementRef, Input, OnInit, Optional} from '@angular/core';

@Directive({
  selector: '[ngplWidth]'
})
export class NgplWidthDirective implements OnInit {
  @Input() ngplWidth = '100%';

  constructor(@Optional() private host: ElementRef) {

  }

  ngOnInit(): void {
    const element = this.host.nativeElement as HTMLElement;
    if (!!element && !!element.style) {
      element.style.width = this.ngplWidth;
      element.style.maxWidth = this.ngplWidth;
    }
  }
}
