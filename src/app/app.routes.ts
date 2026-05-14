import { Routes } from '@angular/router';
import { Sobremi } from './componentes/dinamicos/sobremi/sobremi';
import { Educacion } from './componentes/dinamicos/educacion/educacion';
import { Proyectos } from './componentes/dinamicos/proyectos/proyectos';

export const routes: Routes = [
  { path: 'sobremi', component: Sobremi },
  { path: 'educacion', component: Educacion },
  { path: 'proyectos', component: Proyectos },
  { path: '', redirectTo: '/sobremi', pathMatch: 'full' },
  { path: '**', redirectTo: '/sobremi' },
];
