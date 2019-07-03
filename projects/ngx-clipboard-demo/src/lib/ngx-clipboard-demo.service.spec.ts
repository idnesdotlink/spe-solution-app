import { TestBed } from '@angular/core/testing';

import { NgxClipboardDemoService } from './ngx-clipboard-demo.service';

describe('NgxClipboardDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxClipboardDemoService = TestBed.get(NgxClipboardDemoService);
    expect(service).toBeTruthy();
  });
});
