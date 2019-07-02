import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleChartBarComponent } from './sample-chart-bar.component';

describe('SampleChartBarComponent', () => {
  let component: SampleChartBarComponent;
  let fixture: ComponentFixture<SampleChartBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleChartBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleChartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
