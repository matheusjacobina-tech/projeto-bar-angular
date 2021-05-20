
// angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// projeto
import { Usuario } from './../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  static usuarios: Array<Usuario> = [
    {
      id: 1,
      nome: 'julia',
      login: 'admin',
      senha: '123',
    }];
  // ,
  //   {
  //     id: 2,
  //     nome: 'joao',
  //     login: 'joao',
  //     senha: '123',
  //   },
  //   {
  //     id: 3,
  //     nome: 'manu',
  //     login: 'manu',
  //     senha: '123',
  //   },
  //   {
  //     id: 4,
  //     nome: 'luiza',
  //     login: 'luiza',
  //     senha: '123',
  //   }
  // ];

  constructor() { }

  static insertUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  static getListUsuario(): Usuario[] {
    return this.usuarios;
  }

  static findUsuarioById(id: any): Usuario {
    for (const user of this.usuarios) {
      if (user.id == id) {
        return user;
      }
    }
    return null;
  }

  static updateUsuario(usuario: Usuario): void {
    const result = this.findUsuarioById(usuario.id);
    if (result) {
      const index = this.usuarios.indexOf(result);
      this.usuarios[index] = usuario;
    }
  }

  static deletarUsuario(usuario: Usuario): boolean {
    const result = this.findUsuarioById(usuario.id);
    if (result) {
      this.usuarios.filter((el: Usuario) => el.id !== usuario.id);
      return true;
    }
    return false;
  }

}
