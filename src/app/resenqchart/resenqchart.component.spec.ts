import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenqchartComponent } from './resenqchart.component';

describe('ResenqchartComponent', () => {
  let component: ResenqchartComponent;
  let fixture: ComponentFixture<ResenqchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResenqchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResenqchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
