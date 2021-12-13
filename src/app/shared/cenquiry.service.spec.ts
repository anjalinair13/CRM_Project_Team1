import { TestBed } from '@angular/core/testing';

import { CenquiryService } from './cenquiry.service';

describe('CenquiryService', () => {
  let service: CenquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
