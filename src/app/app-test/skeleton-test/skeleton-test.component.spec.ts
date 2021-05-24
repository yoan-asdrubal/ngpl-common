import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonTestComponent } from './skeleton-test.component';

describe('SkeletonTestComponent', () => {
  let component: SkeletonTestComponent;
  let fixture: ComponentFixture<SkeletonTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
