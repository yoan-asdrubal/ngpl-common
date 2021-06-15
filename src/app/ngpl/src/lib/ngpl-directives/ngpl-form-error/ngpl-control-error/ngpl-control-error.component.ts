/*
 *
 * Yoan Asdrubal Quintana Ramirez.
 *  3/4/2019
 *
 */

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  templateUrl: './ngpl-control-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ngpl-control-error.component.css']
})
export class NgplControlErrorComponent implements OnInit {
  _hide = true;

  constructor(private cdr: ChangeDetectorRef) {
  }

  _text;

  @Input() set text(value) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  };

  ngOnInit() {
  }

}
