import { TestBed } from '@angular/core/testing';

import { LibTooltip2Service } from './lib-tooltip2.service';

describe('LibTooltip2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibTooltip2Service = TestBed.get(LibTooltip2Service);
    expect(service).toBeTruthy();
  });
});
