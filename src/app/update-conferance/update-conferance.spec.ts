import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { UpdateConferance } from './update-conferance';

describe('UpdateConferance', () => {
  let component: UpdateConferance;
  let fixture: ComponentFixture<UpdateConferance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateConferance],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateConferance);
    fixture.componentRef.setInput('id', '1');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
