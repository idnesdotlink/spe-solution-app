import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartsSampleComponent } from './ngx-charts-sample.component';

describe('NgxChartsSampleComponent', () => {
  let component: NgxChartsSampleComponent;
  let fixture: ComponentFixture<NgxChartsSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChartsSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
