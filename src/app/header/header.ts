import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
=======
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-header',
  imports: [Navbar],
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
