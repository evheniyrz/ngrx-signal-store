import { TestBed } from '@angular/core/testing';

import { GenerateId } from './generate-id';

describe('GenerateId', () => {
  let service: GenerateId;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateId);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
