// angular
import { Injectable } from '@angular/core';

// projeto
import { Usuario } from './../model/usuario.model';
import { Perfil } from './../model/perfil.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  static perfis: Array<Perfil> = [
    {
      id: 1,
      perfil: 'Administrador',
    },
    {
      id: 2,
      perfil: 'Gerente',
    },
    {
      id: 3,
      perfil: 'Atendente',
    },
  ];

  static usuarios: Array<Usuario> = [
    {
      id: 1,
      nome: 'julia',
      login: 'admin',
      senha: '123',
      perfil: { id: 1, perfil: 'Administrador' }
    },
    {
      id: 2,
      nome: 'joao',
      login: 'joao',
      senha: '123',
      perfil: { id: 2, perfil: 'Gerente' }
    },
    {
      id: 3,
      nome: 'manu',
      login: 'manu',
      senha: '123',
      perfil: { id: 1, perfil: 'Atendente' }
    },
    {
      id: 4,
      nome: 'luiza',
      login: 'luiza',
      senha: '123',
      perfil: { id: 1, perfil: 'Atendente'}
    },
  ];

  constructor() {}


  static insertUsuario(usuario: Usuario): boolean {
    this.usuarios.push(usuario);
    return true;
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

  static loginUsuario(login: any, senha: any): Usuario {
    for (const user of this.usuarios) {
      if (user.login == login && user.senha == senha) {
        return user;
      }
    }
    return null;
  }

  static logado(): boolean {
    const logado = localStorage.getItem('usuario');
    if (logado) {
      return true;
    }
    return false;
  }

  static deslogado(): void {
    localStorage.removeItem('usuario');
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

  // --------------------------------------------------
  // Component
  // Perfil
  // --------------------------------------------------
  static insertPerfil(perfil: Perfil): boolean {
    this.perfis.push(perfil);
    return true;
  }

  static getListPerfil(): Perfil[] {
    return this.perfis;
  }

  static findPerfilById(id: any): Perfil {
    for (const p of this.perfis) {
      if (p.id == id) {
        return p;
      }
    }
    return null;
  }

  static updatePerfil(perfil: Perfil): void {
    const result = this.findPerfilById(perfil.id);
    if (result) {
      const index = this.perfis.indexOf(result);
      this.perfis[index] = perfil;
    }
  }

  static deletarPerfil(perfil: Perfil): boolean {
    const result = this.findPerfilById(perfil.id);
    if (result) {
      this.perfis.filter((el: Perfil) => el.id !== perfil.id);
      return true;
    }
    return false;
  }
}
