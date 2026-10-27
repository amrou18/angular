import { Component, OnInit, inject, input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConferanceService } from '../conferance-service';
import { Conferance } from '../models/conferance';

@Component({
  selector: 'app-update-conferance',
  imports: [ReactiveFormsModule],
  templateUrl: './update-conferance.html',
  styleUrl: './update-conferance.css',
})
export class UpdateConferance implements OnInit {
  // id récupéré depuis la route /update/:id
  id = input.required<string>();

  private fb = inject(FormBuilder);
  private conferanceService = inject(ConferanceService);
  private router = inject(Router);

  conferanceForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    location: ['', Validators.required],
    date: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    nbPlaces: [1, [Validators.required, Validators.min(1)]],
  });

  ngOnInit(): void {
    // consommer getConferanceById() pour pré-remplir le formulaire
    this.conferanceService.getConferanceById(Number(this.id())).subscribe({
      next: (conf) => this.conferanceForm.patchValue(conf),
      error: (err) => console.error('Conférence introuvable', err),
    });
  }

  // consommer updateConferance()
  submitForm() {
    if (this.conferanceForm.invalid) return;
    const id = Number(this.id());
    const conf: Conferance = { id, ...this.conferanceForm.getRawValue() };
    this.conferanceService.updateConferance(id, conf).subscribe({
      next: () => this.router.navigate(['/details', id]),
      error: (err) => console.error('Erreur modification', err),
    });
  }
}
