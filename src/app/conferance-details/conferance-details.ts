import { Component, input, inject, computed } from '@angular/core';
import { BookingService } from '../services/booking';
import { ConferenceItem } from '../services/conference';

@Component({
  selector: 'app-conferance-details',
  imports: [],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails {
  readonly conf = input.required<ConferenceItem>();

  private readonly bookingService = inject(BookingService);

  readonly booked = computed(() => this.bookingService.isBooked(this.conf().id));

  toggleBooking(): void {
    this.bookingService.toggleBooking(this.conf().id);
  }
}
