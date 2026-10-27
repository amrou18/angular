<<<<<<< HEAD
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConferanceService } from '../conferance-service';
import { Conferance } from '../models/conferance';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList implements OnInit {
  // injection du service
  private conferanceService = inject(ConferanceService);

  //signal
  conferances = signal<Conferance[]>([]);

  ngOnInit(): void {
    this.loadConferances();
  }

  // consommer getallConferances()
  loadConferances() {
    this.conferanceService.getallConferances().subscribe({
      next: (data) => this.conferances.set(data),
      error: (err) => console.error('Erreur chargement conférences', err),
    });
  }

  // consommer deleteConferance()
  delete(id?: number) {
    if (id == null) return;
    if (!confirm('Voulez-vous vraiment supprimer cette conférence ?')) return;
    this.conferanceService.deleteConferance(id).subscribe({
      next: () => this.conferances.update(list => list.filter(c => c.id !== id)),
      error: (err) => console.error('Erreur suppression', err),
    });
  }
=======
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
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
}
