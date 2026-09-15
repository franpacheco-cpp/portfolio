import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Tecnologia {
  id?: number;
  nombre: string;
}

export interface ProyectoItem {
  id?: number;
  nombre: string;
  descripcion: string;
  img: string;
  url: string;
  tecnologias?: Tecnologia[];
  tecnologias_ids?: number[];
}

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private apiUrl = 'http://127.0.0.1:8000/api/proyectos/';

  constructor(private http: HttpClient) {}

  obtenerProyectos(): Observable<ProyectoItem[]> {
    return this.http.get<ProyectoItem[]>(this.apiUrl);
  }

  obtenerProyectoPorId(id: number): Observable<ProyectoItem> {
    return this.http.get<ProyectoItem>(`${this.apiUrl}${id}/`);
  }

  crearProyecto(proyecto: ProyectoItem): Observable<ProyectoItem> {
    return this.http.post<ProyectoItem>(this.apiUrl, proyecto);
  }

  actualizarProyecto(id: number, proyecto: ProyectoItem): Observable<ProyectoItem> {
    return this.http.put<ProyectoItem>(`${this.apiUrl}${id}/`, proyecto);
  }

  eliminarProyecto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
