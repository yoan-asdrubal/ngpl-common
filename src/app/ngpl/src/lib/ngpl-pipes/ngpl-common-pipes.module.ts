import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplSafePipe} from './ngpl-safe.pipe';
import {NgplSafeHtmlPipe} from './ngpl-safeHtml.pipe';
import {NgplSliceItemsPipe} from './ngpl-slice-items.pipe';
import {NgplGeneratePagesPipe} from './ngpl-generate-pages.pipe';
import {TruncatePipe} from './truncate/truncate.pipe';
import {NgplFillPipe} from './ngpl-fill.pipe';
import {NgplHighlightPipe} from './highlight/ngpl-highlight.pipe';
import '../ngpl-interfaces/string.interface';
import '../ngpl-interfaces/object.interface';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgplSafePipe,
    NgplSafeHtmlPipe,
    NgplSliceItemsPipe,
    NgplGeneratePagesPipe,
    TruncatePipe,
    NgplFillPipe,
    NgplHighlightPipe
  ],
  exports: [
    NgplSafePipe,
    NgplSafeHtmlPipe,
    NgplSliceItemsPipe,
    NgplGeneratePagesPipe,
    TruncatePipe,
    NgplHighlightPipe,
    NgplFillPipe
  ]
})
export class NgplCommonPipesModule {
}
