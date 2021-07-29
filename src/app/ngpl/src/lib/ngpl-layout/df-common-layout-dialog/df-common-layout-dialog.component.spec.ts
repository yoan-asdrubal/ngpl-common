import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DfCommonLayoutDialogComponent} from './df-common-layout-dialog.component';

describe('CommonLayoutDialogComponent', () => {
  let component: DfCommonLayoutDialogComponent;
  let fixture: ComponentFixture<DfCommonLayoutDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DfCommonLayoutDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfCommonLayoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
