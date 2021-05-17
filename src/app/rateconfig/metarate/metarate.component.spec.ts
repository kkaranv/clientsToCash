import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetarateComponent } from './metarate.component';

describe('MetarateComponent', () => {
  let component: MetarateComponent;
  let fixture: ComponentFixture<MetarateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetarateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetarateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
