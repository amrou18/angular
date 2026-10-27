import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { provideRouter } from '@angular/router';
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
<<<<<<< HEAD
=======
      providers: [provideRouter([])],
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
<<<<<<< HEAD
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ssa4');
=======
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the navbar', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
  });
});
