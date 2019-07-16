import { TestBed } from '@angular/core/testing';

import { NgxRatingService } from './ngx-rating.service';

describe('NgxRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxRatingService = TestBed.get(NgxRatingService);
    expect(service).toBeTruthy();
  });
});
