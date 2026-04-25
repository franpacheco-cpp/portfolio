import { Routes } from '@angular/router';
import { Sobremi } from './components/sobremi/sobremi';
import { Educacion } from './components/educacion/educacion';
import { Proyectos } from './components/proyectos/proyectos';

export const routes: Routes = [
  { path: 'sobremi', component: Sobremi },
  { path: 'educacion', component: Educacion },
  { path: 'proyectos', component: Proyectos },
  { path: '', redirectTo: '/sobremi', pathMatch: 'full' },
  { path: '**', redirectTo: '/sobremi' },
];
