import { Component, inject } from '@angular/core';
import { ConferanceDetails } from '../conferance-details/conferance-details';
import { ConferenceService } from '../services/conference';
import { BookingService } from '../services/booking';

/** Display only: all data and booking logic live in the services. */
@Component({
  selector: 'app-conferance-list',
  imports: [ConferanceDetails],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList {
  readonly conferenceService = inject(ConferenceService);
  readonly bookingService = inject(BookingService);
}
