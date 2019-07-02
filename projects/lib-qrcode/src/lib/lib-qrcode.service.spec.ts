import { TestBed } from '@angular/core/testing';

import { LibQrcodeService } from './lib-qrcode.service';

describe('LibQrcodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibQrcodeService = TestBed.get(LibQrcodeService);
    expect(service).toBeTruthy();
  });
});
