import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgplSelectionTestComponent } from './ngpl-selection-test.component';

describe('NgplSelectTestComponent', () => {
  let component: NgplSelectionTestComponent;
  let fixture: ComponentFixture<NgplSelectionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgplSelectionTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgplSelectionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
