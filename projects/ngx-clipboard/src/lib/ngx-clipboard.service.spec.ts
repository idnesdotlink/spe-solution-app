import { TestBed } from '@angular/core/testing';

import { NgxClipboardService } from './ngx-clipboard.service';

describe('NgxClipboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxClipboardService = TestBed.get(NgxClipboardService);
    expect(service).toBeTruthy();
  });
});
