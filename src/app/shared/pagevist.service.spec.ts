import { TestBed } from '@angular/core/testing';

import { PagevistService } from './pagevist.service';

describe('PagevistService', () => {
  let service: PagevistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagevistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
