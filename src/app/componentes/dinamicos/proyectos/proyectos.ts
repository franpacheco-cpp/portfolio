import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectoServicio, ProyectoItem } from '../../../servicios/proyecto';

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos implements OnInit {
  proyectos = signal<ProyectoItem[]>([]);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private proyectoServicio: ProyectoServicio) {}

  ngOnInit(): void {
    this.proyectoServicio.obtenerProyectos().subscribe({
      next: (data) => {
        this.proyectos.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        this.error.set('No se pudieron cargar los proyectos.');
        this.cargando.set(false);
        console.error(err);
      },
      complete: () => console.info('Proyectos cargados.'),
    });
  }
}
