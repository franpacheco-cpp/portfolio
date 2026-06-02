import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Proyecto {
  nombre: string = '';
  descripcion: string = '';

  constructor(httpClient: HttpClient) {}
}
