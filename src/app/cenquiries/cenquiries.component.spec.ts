import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenquiriesComponent } from './cenquiries.component';

describe('CenquiriesComponent', () => {
  let component: CenquiriesComponent;
  let fixture: ComponentFixture<CenquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
