import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferanceDetails } from './conferance-details';
import { BookingService } from '../services/booking';

describe('ConferanceDetails', () => {
  let component: ConferanceDetails;
  let fixture: ComponentFixture<ConferanceDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferanceDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferanceDetails);
    fixture.componentRef.setInput('conf', {
      id: 1,
      title: 'Introduction à Angular',
      topic: 'Web',
      date: '2026-11-15',
      speaker: 'Ahmed Ben Ali',
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should book through the shared BookingService', () => {
    component.toggleBooking();
    expect(TestBed.inject(BookingService).isBooked(1)).toBe(true);
  });
});
