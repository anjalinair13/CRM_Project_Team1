import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenquiryStatusComponent } from './renquiry-status.component';

describe('RenquiryStatusComponent', () => {
  let component: RenquiryStatusComponent;
  let fixture: ComponentFixture<RenquiryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenquiryStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenquiryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
