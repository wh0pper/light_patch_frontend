import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerToggleComponent } from './power-toggle.component';

describe('PowerToggleComponent', () => {
  let component: PowerToggleComponent;
  let fixture: ComponentFixture<PowerToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
