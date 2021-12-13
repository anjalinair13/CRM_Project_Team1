import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenquiryNewComponent } from './renquiry-new.component';

describe('RenquiryNewComponent', () => {
  let component: RenquiryNewComponent;
  let fixture: ComponentFixture<RenquiryNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenquiryNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenquiryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
