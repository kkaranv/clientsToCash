import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillchargeComponent } from './billcharge.component';

describe('BillchargeComponent', () => {
  let component: BillchargeComponent;
  let fixture: ComponentFixture<BillchargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillchargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
