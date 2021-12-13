import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenquiryEditComponent } from './cenquiry-edit.component';

describe('CenquiryEditComponent', () => {
  let component: CenquiryEditComponent;
  let fixture: ComponentFixture<CenquiryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenquiryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenquiryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
