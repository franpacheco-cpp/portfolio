import { Routes } from '@angular/router';
import { Sobremi } from './componentes/dinamicos/sobremi/sobremi';
import { Educacion } from './componentes/dinamicos/educacion/educacion';
import { Proyectos } from './componentes/dinamicos/proyectos/proyectos';
import { Iniciosesion } from './componentes/dinamicos/sesion/iniciosesion/iniciosesion';
import { Registro } from './componentes/dinamicos/sesion/registro/registro';
import { Sesion } from './componentes/dinamicos/sesion/sesion';

export const routes: Routes = [
  { path: 'sobremi', component: Sobremi },
  { path: 'educacion', component: Educacion },
  { path: 'proyectos', component: Proyectos },
  {
    path: 'sesion',
    component: Sesion,
    children: [
      { path: 'iniciosesion', component: Iniciosesion },
      { path: 'registro', component: Registro },
    ],
  },
  { path: '', redirectTo: '/sobremi', pathMatch: 'full' },
  { path: '**', redirectTo: '/sobremi' },
];
