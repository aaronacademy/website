import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireboltVideoComponent } from './firebolt-video.component';

describe('FireboltVideoComponent', () => {
  let component: FireboltVideoComponent;
  let fixture: ComponentFixture<FireboltVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireboltVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireboltVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
