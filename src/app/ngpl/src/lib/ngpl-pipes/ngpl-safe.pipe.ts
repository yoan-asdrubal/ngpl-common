import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'ngplSafe'
})
export class NgplSafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  // tslint:disable-next-line:typedef
  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
