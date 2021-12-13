import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenquiryComponent } from './renquiry.component';

describe('RenquiryComponent', () => {
  let component: RenquiryComponent;
  let fixture: ComponentFixture<RenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
