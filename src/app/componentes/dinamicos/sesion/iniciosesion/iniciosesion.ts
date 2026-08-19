import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciosesion',
  imports: [ReactiveFormsModule],
  templateUrl: './iniciosesion.html',
  styleUrl: './iniciosesion.css',
})
export class Iniciosesion {
  private formBuilder = inject(FormBuilder);

  inicioSesionForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contrasenia: ['', [Validators.required, Validators.min(6)]],
  });

  onSubmit(): void {
    if (this.inicioSesionForm.valid) {
      console.log('Datos de inicio de sesión:', this.inicioSesionForm.value);
    }
  }
}
