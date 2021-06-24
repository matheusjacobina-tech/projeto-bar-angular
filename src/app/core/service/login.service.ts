import { Usuario } from './../model/usuario.model';
import { UsuarioService } from './usuario.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  login(user: any): boolean {
    const usuario: Usuario = UsuarioService.loginUsuario(
      user.login,
      user.senha
    );
    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      return true;
    }
    return false;
  }
}
