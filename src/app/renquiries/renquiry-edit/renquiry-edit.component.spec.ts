import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenquiryEditComponent } from './renquiry-edit.component';

describe('RenquiryEditComponent', () => {
  let component: RenquiryEditComponent;
  let fixture: ComponentFixture<RenquiryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenquiryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenquiryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
