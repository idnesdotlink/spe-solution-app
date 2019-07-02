import { TestBed } from '@angular/core/testing';

import { ColorPickerLibService } from './color-picker-lib.service';

describe('ColorPickerLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorPickerLibService = TestBed.get(ColorPickerLibService);
    expect(service).toBeTruthy();
  });
});
