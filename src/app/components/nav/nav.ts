import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule], // ¡Esto es clave para habilitar los links!
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {}
