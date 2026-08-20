import { Routes } from '@angular/router';
import { Sobremi } from './componentes/dinamicos/sobremi/sobremi';
import { Educacion } from './componentes/dinamicos/educacion/educacion';
import { Proyectos } from './componentes/dinamicos/proyectos/proyectos';
import { Iniciosesion } from './componentes/dinamicos/sesion/iniciosesion/iniciosesion';
import { Registro } from './componentes/dinamicos/sesion/registro/registro';
import { Sesion } from './componentes/dinamicos/sesion/sesion';
import { ProyectosForm } from './componentes/dinamicos/proyectos/proyectosform/proyectosform';

export const routes: Routes = [
  { path: 'sobremi', component: Sobremi },
  { path: 'educacion', component: Educacion },
  {
    path: 'proyectos',
    component: Proyectos,
    children: [
      { path: '', redirectTo: 'proyectos', pathMatch: 'full' },
      { path: 'proyectosForm', component: ProyectosForm },
    ],
  },
  {
    path: 'sesion',
    component: Sesion,
    children: [
      { path: '', redirectTo: 'iniciosesion', pathMatch: 'full' },
      { path: 'iniciosesion', component: Iniciosesion },
      { path: 'registro', component: Registro },
    ],
  },
  { path: '', redirectTo: '/sobremi', pathMatch: 'full' },
  { path: '**', redirectTo: '/sobremi' },
];
