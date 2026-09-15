import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './pie.html',
  styleUrl: './pie.css',
})
export class Footer {
  anio: number = new Date().getFullYear();
}
