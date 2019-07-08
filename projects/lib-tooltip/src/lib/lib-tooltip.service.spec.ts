import { TestBed } from '@angular/core/testing';

import { LibTooltipService } from './lib-tooltip.service';

describe('LibTooltipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibTooltipService = TestBed.get(LibTooltipService);
    expect(service).toBeTruthy();
  });
});
