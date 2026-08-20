import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuarios';

  private usuarioActualSignal = signal<any>(this.obtenerSesionInicial());
  public usuarioActual = this.usuarioActualSignal.asReadonly();
  public estaAutenticado = computed(() => !!this.usuarioActualSignal());

  constructor(private http: HttpClient) {}

  private obtenerSesionInicial() {
    const sesion = localStorage.getItem('sesion');
    return sesion ? JSON.parse(sesion) : null;
  }

  registrar(usuario: any) {
    usuario.rol = 'usuario';
    return this.http.post(this.apiUrl, usuario).pipe(
      tap((nuevoUsuario) => {
        this.guardarSesion(nuevoUsuario);
        this.usuarioActualSignal.set(nuevoUsuario);
      }),
    );
  }

  iniciarSesion(email: string, contrasenia: string) {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`).pipe(
      map((usuarios) => {
        if (usuarios && usuarios.length > 0) {
          const usuario = usuarios[0];
          if (usuario.contrasenia === contrasenia) {
            return [usuario];
          }
        }
        return [];
      }),
      tap((usuarios) => {
        if (usuarios && usuarios.length > 0) {
          const usuario = usuarios[0];
          this.guardarSesion(usuario);
          this.usuarioActualSignal.set(usuario);
        }
      }),
    );
  }

  guardarSesion(usuario: any) {
    localStorage.setItem('sesion', JSON.stringify(usuario));
  }

  obtenerRol() {
    const sesion = localStorage.getItem('sesion');
    return sesion ? JSON.parse(sesion).rol : null;
  }

  cerrarSesion() {
    localStorage.removeItem('sesion');
    this.usuarioActualSignal.set(null);
  }
}
