import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciosesion',
  imports: [ReactiveFormsModule], // <-- Imprescindible para el formulario reactivo
  templateUrl: './iniciosesion.html',
  styleUrl: './iniciosesion.css',
})
export class Iniciosesion {
  private formBuilder = inject(FormBuilder);

  inicioSesionForm = this.formBuilder.group({
    email: [''],
    contrasenia: [''],
  });

  onSubmit(): void {
    if (this.inicioSesionForm.valid) {
      console.log('Datos de inicio de sesión:', this.inicioSesionForm.value);
    }
  }
}
