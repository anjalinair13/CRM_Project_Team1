import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenquiryListComponent } from './cenquiry-list.component';

describe('CenquiryListComponent', () => {
  let component: CenquiryListComponent;
  let fixture: ComponentFixture<CenquiryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenquiryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
