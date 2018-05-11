import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightStateFormComponent } from './light-state-form.component';

describe('LightStateFormComponent', () => {
  let component: LightStateFormComponent;
  let fixture: ComponentFixture<LightStateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightStateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightStateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
