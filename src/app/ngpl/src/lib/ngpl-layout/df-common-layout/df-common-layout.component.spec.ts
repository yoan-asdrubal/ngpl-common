import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DfCommonLayoutComponent} from './df-common-layout.component';

describe('CommonLayoutComponent', () => {
  let component: DfCommonLayoutComponent;
  let fixture: ComponentFixture<DfCommonLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DfCommonLayoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfCommonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
