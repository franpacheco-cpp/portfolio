import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/estaticos/encabezado/encabezado';
import { Nav } from './componentes/estaticos/nav/nav';
import { Footer } from './componentes/estaticos/pie/pie';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
