import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgplCopySuccessComponent } from './ngpl-copy-success.component';

describe('CopySuccessComponent', () => {
  let component: NgplCopySuccessComponent;
  let fixture: ComponentFixture<NgplCopySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgplCopySuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplCopySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
