import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalChefComponent } from './local-chef.component';

describe('LocalChefComponent', () => {
  let component: LocalChefComponent;
  let fixture: ComponentFixture<LocalChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalChefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
