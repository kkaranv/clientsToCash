import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesListComponent } from './rates-list.component';

describe('RatesListComponent', () => {
  let component: RatesListComponent;
  let fixture: ComponentFixture<RatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
