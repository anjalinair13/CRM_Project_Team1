import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenquiryNewComponent } from './cenquiry-new.component';

describe('CenquiryNewComponent', () => {
  let component: CenquiryNewComponent;
  let fixture: ComponentFixture<CenquiryNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenquiryNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenquiryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
