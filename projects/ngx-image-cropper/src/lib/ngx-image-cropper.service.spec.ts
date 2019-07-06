import { TestBed } from '@angular/core/testing';

import { NgxImageCropperService } from './ngx-image-cropper.service';

describe('NgxImageCropperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxImageCropperService = TestBed.get(NgxImageCropperService);
    expect(service).toBeTruthy();
  });
});
