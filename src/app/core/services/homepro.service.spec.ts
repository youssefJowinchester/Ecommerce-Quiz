import { TestBed } from '@angular/core/testing';

import { HomeproService } from './homepro.service';

describe('HomeproService', () => {
  let service: HomeproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
