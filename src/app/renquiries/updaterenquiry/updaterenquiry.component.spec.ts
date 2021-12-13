import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterenquiryComponent } from './updaterenquiry.component';

describe('UpdaterenquiryComponent', () => {
  let component: UpdaterenquiryComponent;
  let fixture: ComponentFixture<UpdaterenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdaterenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
