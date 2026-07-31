import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule], // <-- Agregado aquí
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private formBuilder = inject(FormBuilder);

  registroForm = this.formBuilder.group({
    email: [''],
    contrasenia: [''],
    contrasenia2: [''],
  });

  onSubmit(): void {
    if (this.registroForm.valid) {
      console.log('Datos del formulario:', this.registroForm.value);
    }
  }
}
