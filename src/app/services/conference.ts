import { Injectable, signal, computed } from '@angular/core';

export interface ConferenceItem {
  id: number;
  title: string;
  topic: string;
  date: string;
  speaker: string;
}

/**
 * Catalog responsibility: owns the conference data, the topic filter
 * and the derived (filtered) list. Knows nothing about bookings or views.
 * providedIn: 'root' => one single instance shared by the whole app.
 */
@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  private readonly conferenceList = signal<ConferenceItem[]>([
    {
      id: 1,
      title: 'Introduction à Angular',
      topic: 'Web',
      date: '2026-11-15',
      speaker: 'Ahmed Ben Ali'
    },
    {
      id: 2,
      title: 'Intelligence artificielle',
      topic: 'IA',
      date: '2026-11-20',
      speaker: 'Sarra Trabelsi'
    },
    {
      id: 3,
      title: 'Cybersécurité moderne',
      topic: 'Sécurité',
      date: '2026-11-25',
      speaker: 'Youssef Mansour'
    }
  ]);

  private readonly topic = signal('Tous');

  /** Read-only views: components cannot mutate the state directly. */
  readonly conferences = this.conferenceList.asReadonly();
  readonly selectedTopic = this.topic.asReadonly();

  /** Topics are derived from the data instead of being hard-coded in a component. */
  readonly topics = computed(() => [
    'Tous',
    ...Array.from(new Set(this.conferenceList().map(c => c.topic)))
  ]);

  readonly filteredConferences = computed(() => {
    const topic = this.topic();

    if (topic === 'Tous') {
      return this.conferenceList();
    }

    return this.conferenceList().filter(
      conference => conference.topic === topic
    );
  });

  filterByTopic(topic: string): void {
    this.topic.set(topic);
  }
}
