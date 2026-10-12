import { Injectable, signal, computed, inject } from '@angular/core';
import { ConferenceService } from './conference';

/**
 * Booking responsibility: owns the set of reserved conference ids.
 * providedIn: 'root' => the Navbar and the catalog read the SAME signal,
 * so they are always synchronized.
 */
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private readonly conferenceService = inject(ConferenceService);

  private readonly reservedIds = signal<number[]>([]);

  readonly bookedIds = this.reservedIds.asReadonly();

  readonly bookedCount = computed(
    () => this.reservedIds().length
  );

  /** Personalized program: reserved ids joined with the catalog. */
  readonly bookedConferences = computed(() =>
    this.conferenceService
      .conferences()
      .filter(conference => this.reservedIds().includes(conference.id))
  );

  toggleBooking(id: number): void {
    this.reservedIds.update(ids =>
      ids.includes(id)
        ? ids.filter(item => item !== id)
        : [...ids, id]
    );
  }

  isBooked(id: number): boolean {
    return this.reservedIds().includes(id);
  }
}
