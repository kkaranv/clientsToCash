import { TestBed } from '@angular/core/testing';

import { MetarateService } from './metarate.service';

describe('MetarateService', () => {
  let service: MetarateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetarateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
