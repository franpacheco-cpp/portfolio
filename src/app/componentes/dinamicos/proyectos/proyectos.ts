import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoService, ProyectoItem } from '../../../servicios/proyecto';
import { AuthService } from '../../../servicios/autenticacion';
import { ProyectosForm } from './proyectosform/proyectosform';

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule, ProyectosForm],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos implements OnInit {
  proyectos = signal<ProyectoItem[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(
    private proyectoService: ProyectoService,
    public autenticacionService: AuthService,
  ) {}

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos(): void {
    this.cargando.set(true);
    this.proyectoService.obtenerProyectos().subscribe({
      next: (data) => {
        this.proyectos.set(data);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar los proyectos.');
        this.cargando.set(false);
      },
    });
  }

  eliminar(id: string): void {
    this.proyectoService.eliminarProyecto(id).subscribe(() => {
      this.cargarProyectos();
    });
  }
}
