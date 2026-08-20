import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Tecnologia {
  id: string;
  nombre: string;
}

export interface ProyectoItem {
  id: string;
  nombre: string;
  descripcion: string;
  img: string;
  url?: string;
  tecnologias: Tecnologia[];
}

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private apiUrl = 'http://localhost:3000/proyectos';

  constructor(private http: HttpClient) {}

  obtenerProyectos(): Observable<ProyectoItem[]> {
    return this.http.get<ProyectoItem[]>(this.apiUrl);
  }

  crearProyecto(proyecto: ProyectoItem): Observable<ProyectoItem> {
    return this.http.post<ProyectoItem>(this.apiUrl, proyecto);
  }

  eliminarProyecto(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
