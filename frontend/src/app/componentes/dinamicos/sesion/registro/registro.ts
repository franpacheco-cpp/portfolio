import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../servicios/autenticacion';

export function matchPasswords(control: AbstractControl): ValidationErrors | null {
  const password = control.get('contrasenia');
  const confirmPassword = control.get('contrasenia2');
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ mismatch: true });
    return { mismatch: true };
  }
  return null;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  mensajeError = signal<string | null>(null);
  mensajeExito = signal<string | null>(null);

  registroForm = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]],
      contrasenia2: ['', [Validators.required]],
    },
    { validators: matchPasswords },
  );

  get Email() {
    return this.registroForm.get('email');
  }
  get Contrasenia() {
    return this.registroForm.get('contrasenia');
  }
  get Contrasenia2() {
    return this.registroForm.get('contrasenia2');
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      const { email, contrasenia } = this.registroForm.value;

      this.authService.registrar({ email, contrasenia }).subscribe({
        next: () => {
          this.mensajeExito.set('¡Cuenta creada e iniciada con éxito!');
          this.mensajeError.set(null);
        },
        error: (err) => {
          console.error('Error al registrar', err);
          this.mensajeError.set('No se pudo registrar el usuario. Intenta de nuevo.');
        },
      });
    } else {
      this.registroForm.markAllAsTouched();
    }
  }
}
