import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthchargesComponent } from './monthcharges.component';

describe('MonthchargesComponent', () => {
  let component: MonthchargesComponent;
  let fixture: ComponentFixture<MonthchargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthchargesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthchargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
