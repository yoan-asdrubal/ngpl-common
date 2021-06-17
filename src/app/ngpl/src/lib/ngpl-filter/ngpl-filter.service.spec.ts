import { TestBed } from '@angular/core/testing';

import { NgplFilterService } from './ngpl-filter.service';

describe('NgplFilterService', () => {
  let service: NgplFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgplFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
