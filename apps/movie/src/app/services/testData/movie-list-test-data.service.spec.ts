import { TestBed } from '@angular/core/testing';

import { MovieListTestDataService } from './movie-list-test-data.service';

describe('MovieListTestDataService', () => {
  let service: MovieListTestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieListTestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
