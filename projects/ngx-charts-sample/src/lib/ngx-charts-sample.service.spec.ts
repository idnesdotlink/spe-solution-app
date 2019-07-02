import { TestBed } from '@angular/core/testing';

import { NgxChartsSampleService } from './ngx-charts-sample.service';

describe('NgxChartsSampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxChartsSampleService = TestBed.get(NgxChartsSampleService);
    expect(service).toBeTruthy();
  });
});
