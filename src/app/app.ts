import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { ConferanceList } from './conferance-list/conferance-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer,ConferanceList],
=======
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
<<<<<<< HEAD
  protected readonly title = signal('ssa4');
=======
  protected readonly title = signal('FirstProject');
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
}
