import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenquiryListComponent } from './renquiry-list.component';

describe('RenquiryListComponent', () => {
  let component: RenquiryListComponent;
  let fixture: ComponentFixture<RenquiryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenquiryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
