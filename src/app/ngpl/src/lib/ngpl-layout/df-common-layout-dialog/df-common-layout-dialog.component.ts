import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'df-common-layout-dialog',
  templateUrl: './df-common-layout-dialog.component.html',
  styleUrls: ['./df-common-layout-dialog.component.scss']
})
export class DfCommonLayoutDialogComponent implements OnInit {
  @Input() customClass: '' | 'sm' = '';
  @Input() showActions = true;
  @Input() actionsClass = '';
  @Input() maxHeight = 'calc(100vh - 172px)';
  @Input() title: TemplateRef<any>;
  @Input() titleOptions: TemplateRef<any>;
  @Input() content: TemplateRef<any>;
  @Input() actions: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
