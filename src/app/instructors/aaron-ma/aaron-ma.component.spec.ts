import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Instructor_AM } from './aaron-ma.component';

describe('Instructor_AM', () => {
  let component: Instructor_AM;
  let fixture: ComponentFixture<Instructor_AM>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Instructor_AM ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Instructor_AM);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
