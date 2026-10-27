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
}
