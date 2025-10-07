import { TestBed } from '@angular/core/testing';

import { FormStoreConnectorService } from './form-store-connector-service';

describe('FormStoreConnectorService', () => {
  let service: FormStoreConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormStoreConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
