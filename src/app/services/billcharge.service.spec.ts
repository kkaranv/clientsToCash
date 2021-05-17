import { TestBed } from '@angular/core/testing';

import { BillchargeService } from './billcharge.service';

describe('BillchargeService', () => {
  let service: BillchargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillchargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
