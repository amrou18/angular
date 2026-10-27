import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { AddConferance } from './add-conferance';

describe('AddConferance', () => {
  let component: AddConferance;
  let fixture: ComponentFixture<AddConferance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddConferance],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AddConferance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
