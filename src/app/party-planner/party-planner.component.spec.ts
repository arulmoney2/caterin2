import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyPlannerComponent } from './party-planner.component';

describe('PartyPlannerComponent', () => {
  let component: PartyPlannerComponent;
  let fixture: ComponentFixture<PartyPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyPlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
