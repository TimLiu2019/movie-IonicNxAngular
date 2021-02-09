import { TestBed } from '@angular/core/testing';

import { CustomersTestDataService } from './customers-test-data.service';

describe('CustomersTestDataService', () => {
  let service: CustomersTestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersTestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
