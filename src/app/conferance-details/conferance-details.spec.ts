import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { ConferanceDetails } from './conferance-details';
=======

import { ConferanceDetails } from './conferance-details';
import { BookingService } from '../services/booking';
>>>>>>> b103470507732669cf9be8f27885f96e724464fe

describe('ConferanceDetails', () => {
  let component: ConferanceDetails;
  let fixture: ComponentFixture<ConferanceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferanceDetails],
<<<<<<< HEAD
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferanceDetails);
    fixture.componentRef.setInput('id', '1');
=======
    }).compileComponents();

    fixture = TestBed.createComponent(ConferanceDetails);
    fixture.componentRef.setInput('conf', {
      id: 1,
      title: 'Introduction à Angular',
      topic: 'Web',
      date: '2026-11-15',
      speaker: 'Ahmed Ben Ali',
    });
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD
=======

  it('should book through the shared BookingService', () => {
    component.toggleBooking();
    expect(TestBed.inject(BookingService).isBooked(1)).toBe(true);
  });
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
});
