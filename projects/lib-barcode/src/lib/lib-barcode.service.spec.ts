import { TestBed } from '@angular/core/testing';

import { LibBarcodeService } from './lib-barcode.service';

describe('LibBarcodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibBarcodeService = TestBed.get(LibBarcodeService);
    expect(service).toBeTruthy();
  });
});
