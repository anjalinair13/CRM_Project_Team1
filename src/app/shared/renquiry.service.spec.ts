import { TestBed } from '@angular/core/testing';

import { RenquiryService } from './renquiry.service';

describe('RenquiryService', () => {
  let service: RenquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
