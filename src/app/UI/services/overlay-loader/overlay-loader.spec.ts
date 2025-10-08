import { TestBed } from '@angular/core/testing';

import { OverlayLoader } from './overlay-loader';

describe('OverlayLoader', () => {
  let service: OverlayLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayLoader);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
