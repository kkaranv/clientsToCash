import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetarateListComponent } from './metarate-list.component';

describe('MetarateListComponent', () => {
  let component: MetarateListComponent;
  let fixture: ComponentFixture<MetarateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetarateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetarateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
