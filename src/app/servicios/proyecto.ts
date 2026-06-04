import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Proyecto {
  urlApi: string = 'http://localhost:3000/proyectos';
  constructor(private http: HttpClient) {}
  obtenerProyectos(): Observable<any> {
    return this.http.get(this.urlApi);
  }
}
