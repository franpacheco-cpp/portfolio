import { Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../servicios/autenticacion';
import { ProyectoService, ProyectoItem } from '../../../../servicios/proyecto';

@Component({
  selector: 'app-proyecto-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './proyectosform.html',
  styleUrl: './proyectosform.css',
})
export class ProyectosForm {
  private formBuilder = inject(FormBuilder);
  private proyectoService = inject(ProyectoService);
  public autenticacionService = inject(AuthService);

  proyectoCreado = output<void>();

  cargando = signal<boolean>(false);
  mensajeError = signal<string | null>(null);

  proyectoForm = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', Validators.required],
    img: ['', Validators.required],
    url: [''],
    tecnologiasTexto: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.proyectoForm.valid) {
      this.cargando.set(true);
      const formValues = this.proyectoForm.value;

      const tecnologiasArray = formValues
        .tecnologiasTexto!.split(',')
        .map((t) => ({ nombre: t.trim() }))
        .filter((t) => t.nombre.length > 0);

      const nuevoProyecto: ProyectoItem = {
        nombre: formValues.nombre!,
        descripcion: formValues.descripcion!,
        img: formValues.img!,
        url: formValues.url || '',
        tecnologias: tecnologiasArray,
      };

      this.proyectoService.crearProyecto(nuevoProyecto).subscribe({
        next: () => {
          this.cargando.set(false);
          this.proyectoForm.reset();
          this.mensajeError.set(null);
          this.proyectoCreado.emit();
        },
        error: (err) => {
          this.cargando.set(false);
          this.mensajeError.set('No se pudo crear el proyecto.');
          console.error(err);
        },
      });
    } else {
      this.proyectoForm.markAllAsTouched();
    }
  }
}
