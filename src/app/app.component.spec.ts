import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AcademyComponent } from './app.component';

describe('AcademyComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AcademyComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AcademyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'website'`, () => {
    const fixture = TestBed.createComponent(AcademyComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('website');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AcademyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('website app is running!');
  });
});
