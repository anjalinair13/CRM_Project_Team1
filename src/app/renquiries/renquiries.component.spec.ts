import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenquiriesComponent } from './renquiries.component';

describe('RenquiriesComponent', () => {
  let component: RenquiriesComponent;
  let fixture: ComponentFixture<RenquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
