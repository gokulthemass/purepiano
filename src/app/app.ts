import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Titlespace } from './titlespace/titlespace';
import { Middlepart } from './middlepart/middlepart';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Titlespace, Middlepart, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('purepiano');
}
