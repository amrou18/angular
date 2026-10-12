import { TestBed } from '@angular/core/testing';
import { ConferenceService } from './conference';

describe('ConferenceService', () => {
  let service: ConferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return every conference by default', () => {
    expect(service.filteredConferences().length).toBe(service.conferences().length);
  });

  it('should filter by topic', () => {
    service.filterByTopic('IA');
    expect(service.filteredConferences().every(c => c.topic === 'IA')).toBe(true);
    expect(service.filteredConferences().length).toBe(1);
  });

  it('should derive topics from the data', () => {
    expect(service.topics()).toEqual(['Tous', 'Web', 'IA', 'Sécurité']);
  });
});
