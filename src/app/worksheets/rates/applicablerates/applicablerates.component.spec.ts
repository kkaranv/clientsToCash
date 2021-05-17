import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicableratesComponent } from './applicablerates.component';

describe('ApplicableratesComponent', () => {
  let component: ApplicableratesComponent;
  let fixture: ComponentFixture<ApplicableratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicableratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicableratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
