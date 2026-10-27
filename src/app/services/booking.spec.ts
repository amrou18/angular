import { TestBed } from '@angular/core/testing';
import { BookingService } from './booking';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle a booking and update the count', () => {
    service.toggleBooking(1);
    expect(service.isBooked(1)).toBe(true);
    expect(service.bookedCount()).toBe(1);

    service.toggleBooking(1);
    expect(service.isBooked(1)).toBe(false);
    expect(service.bookedCount()).toBe(0);
  });

  it('should expose the booked conferences as a personalized program', () => {
    service.toggleBooking(2);
    expect(service.bookedConferences().map(c => c.id)).toEqual([2]);
  });

  it('should be a single shared instance (providedIn root)', () => {
    expect(TestBed.inject(BookingService)).toBe(service);
  });
});
