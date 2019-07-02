import { TestBed } from '@angular/core/testing';

import { NgxColorPickerDemoService } from './ngx-color-picker-demo.service';

describe('NgxColorPickerDemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxColorPickerDemoService = TestBed.get(NgxColorPickerDemoService);
    expect(service).toBeTruthy();
  });
});
