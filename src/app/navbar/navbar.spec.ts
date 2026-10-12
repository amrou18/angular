import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Navbar } from './navbar';
import { BookingService } from '../services/booking';

describe('Navbar', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Navbar);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should reflect the shared booking count', async () => {
    const fixture = TestBed.createComponent(Navbar);
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Mes réservations : 0');

    TestBed.inject(BookingService).toggleBooking(1);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Mes réservations : 1');
  });
});
