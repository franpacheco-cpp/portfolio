import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../servicios/autenticacion';

@Component({
  selector: 'app-sesion',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sesion.html',
  styleUrl: './sesion.css',
})
export class Sesion {
  public authService = inject(AuthService);

  cerrarSesion() {
    this.authService.cerrarSesion();
  }
}
