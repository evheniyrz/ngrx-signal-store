import { TestBed } from '@angular/core/testing';

import { AbstractRegisterFormService } from './register-form';

describe('AbstractRegisterFormService', () => {
  let service: AbstractRegisterFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractRegisterFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
