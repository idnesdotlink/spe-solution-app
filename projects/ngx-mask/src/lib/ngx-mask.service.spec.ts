import { TestBed } from '@angular/core/testing';

import { NgxMaskService } from './ngx-mask.service';

describe('NgxMaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMaskService = TestBed.get(NgxMaskService);
    expect(service).toBeTruthy();
  });
});
