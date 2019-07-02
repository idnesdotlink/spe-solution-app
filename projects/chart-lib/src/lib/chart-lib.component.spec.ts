import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLibComponent } from './chart-lib.component';

describe('ChartLibComponent', () => {
  let component: ChartLibComponent;
  let fixture: ComponentFixture<ChartLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
