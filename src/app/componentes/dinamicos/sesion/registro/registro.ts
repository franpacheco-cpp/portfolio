import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private formBuilder = inject(FormBuilder);

  registroForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contrasenia: ['', [Validators.required, Validators.min(6)]],
    contrasenia2: ['', [Validators.required, Validators.min(6)]],
  });

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
      if (this.Contrasenia?.value == this.Contrasenia2?.value) {
        console.log('Datos del formulario:', this.registroForm.value);
      } else {
        console.log('Las contraseñas no son iguales!');
      }
    } else {
      console.log('eeeh pillin te has equivocao');
    }
  }
}
