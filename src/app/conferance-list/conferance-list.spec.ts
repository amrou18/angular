import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
=======
>>>>>>> b103470507732669cf9be8f27885f96e724464fe

import { ConferanceList } from './conferance-list';

describe('ConferanceList', () => {
  let component: ConferanceList;
  let fixture: ComponentFixture<ConferanceList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferanceList],
<<<<<<< HEAD
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
=======
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
    }).compileComponents();

    fixture = TestBed.createComponent(ConferanceList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
