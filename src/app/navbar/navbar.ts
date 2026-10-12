import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingService } from '../services/booking';

/** Reads the shared BookingService: no duplicated logic, no `new Component()`. */
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly bookingService = inject(BookingService);
}
