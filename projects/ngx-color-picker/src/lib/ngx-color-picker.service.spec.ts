import { TestBed } from '@angular/core/testing';

import { NgxColorPickerService } from './ngx-color-picker.service';

describe('NgxColorPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxColorPickerService = TestBed.get(NgxColorPickerService);
    expect(service).toBeTruthy();
  });
});
