import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorenqchartComponent } from './corenqchart.component';

describe('CorenqchartComponent', () => {
  let component: CorenqchartComponent;
  let fixture: ComponentFixture<CorenqchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorenqchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorenqchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
