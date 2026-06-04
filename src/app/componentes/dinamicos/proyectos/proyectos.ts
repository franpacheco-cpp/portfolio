import { Component } from '@angular/core';
import { Proyecto } from '../../../servicios/proyecto';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {
  constructor(private proyecto: Proyecto) {
    this.proyecto.obtenerProyectos().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.info('completado'),
    });
  }
}
