import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContantsComponent } from './contants.component';

describe('ContantsComponent', () => {
  let component: ContantsComponent;
  let fixture: ComponentFixture<ContantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
