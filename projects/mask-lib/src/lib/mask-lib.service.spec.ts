import { TestBed } from '@angular/core/testing';

import { MaskLibService } from './mask-lib.service';

describe('MaskLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaskLibService = TestBed.get(MaskLibService);
    expect(service).toBeTruthy();
  });
});
