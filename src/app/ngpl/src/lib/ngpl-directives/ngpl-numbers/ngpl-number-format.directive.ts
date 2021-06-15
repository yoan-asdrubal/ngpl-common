import {Directive, ElementRef, HostListener} from '@angular/core';

const PADDING = '000000';

@Directive({
  selector: '[ngplNumberFormat]'
})
export class NgplNumberFormatDirective {
  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;

  constructor(private el: ElementRef) {
    this.DECIMAL_SEPARATOR = '.';
    this.THOUSANDS_SEPARATOR = ',';
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    this.el.nativeElement.value = this.parse(value);
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.el.nativeElement.value = this.transform(value);
  }

  transform(value: number | string, fractionSize: number = 2): string {
    let [integer, fraction = ''] = (value || '').toString()
      .split(this.DECIMAL_SEPARATOR);

    fraction = fractionSize > 0
      ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
      : '';

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

    return integer + fraction;
  }

  parse(value: string, fractionSize: number = 2): string {
    let [integer, fraction = ''] = (value || '').split(this.DECIMAL_SEPARATOR);

    integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, 'g'), '');

    fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
      ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
      : '';

    return integer + fraction;
  }
}
