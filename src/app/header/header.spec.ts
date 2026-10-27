import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { provideRouter } from '@angular/router';
>>>>>>> b103470507732669cf9be8f27885f96e724464fe

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
<<<<<<< HEAD
=======
      providers: [provideRouter([])],
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
