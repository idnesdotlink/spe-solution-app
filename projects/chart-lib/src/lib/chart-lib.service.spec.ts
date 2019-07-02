import { TestBed } from '@angular/core/testing';

import { ChartLibService } from './chart-lib.service';

describe('ChartLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartLibService = TestBed.get(ChartLibService);
    expect(service).toBeTruthy();
  });
});
