import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenquiryStatusComponent } from './cenquiry-status.component';

describe('CenquiryStatusComponent', () => {
  let component: CenquiryStatusComponent;
  let fixture: ComponentFixture<CenquiryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenquiryStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenquiryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
