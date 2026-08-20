import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../servicios/autenticacion';

@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './iniciosesion.html',
  styleUrl: './iniciosesion.css',
})
export class Iniciosesion {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  mensajeError = signal<string | null>(null);

  inicioSesionForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contrasenia: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit(): void {
    if (this.inicioSesionForm.valid) {
      const { email, contrasenia } = this.inicioSesionForm.value;

      this.authService.iniciarSesion(email!, contrasenia!).subscribe({
        next: (usuarios) => {
          if (usuarios && usuarios.length > 0) {
            console.log('Inicio de sesión exitoso');
          } else {
            this.mensajeError.set('Correo o contraseña incorrectos.');
          }
        },
        error: (err) => {
          console.error('Error de servidor', err);
          this.mensajeError.set('Ocurrió un error al conectar con el servidor.');
        },
      });
    } else {
      this.inicioSesionForm.markAllAsTouched();
    }
  }
}
