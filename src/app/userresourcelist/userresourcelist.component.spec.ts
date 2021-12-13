import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserresourcelistComponent } from './userresourcelist.component';

describe('UserresourcelistComponent', () => {
  let component: UserresourcelistComponent;
  let fixture: ComponentFixture<UserresourcelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserresourcelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserresourcelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
