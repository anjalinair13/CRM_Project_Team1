import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenquiryComponent } from './cenquiry.component';

describe('CenquiryComponent', () => {
  let component: CenquiryComponent;
  let fixture: ComponentFixture<CenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
