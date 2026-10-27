<<<<<<< HEAD
import { Component, OnInit, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConferanceService } from '../conferance-service';
import { Conferance } from '../models/conferance';

@Component({
  selector: 'app-conferance-details',
  imports: [RouterLink],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails implements OnInit {
//  conf = input<any>()
//    increment = output();
//  inc(){
//  this.increment.emit();
//  }


///ActivatedRoute
// id:any;
// constructor(private ar:ActivatedRoute) {
// this.id=this.ar.snapshot.params['id'];
// console.log(this.id);
// }

  // id récupéré depuis la route grâce à withComponentInputBinding()
  id = input.required<string>();

  private conferanceService = inject(ConferanceService);
  conferance = signal<Conferance | null>(null);

  ngOnInit(): void {
    // consommer getConferanceById()
    this.conferanceService.getConferanceById(Number(this.id())).subscribe({
      next: (data) => this.conferance.set(data),
      error: (err) => console.error('Conférence introuvable', err),
    });
=======
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
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
  }
}
