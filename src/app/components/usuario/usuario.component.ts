// angular
import { Component, OnInit } from '@angular/core';

// projeto
import { Usuario } from './../../core/model/usuario.model';
import { UsuarioService } from './../../core/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  colunasTabela = ['id', 'nome', 'login', 'perfil', 'acoes'];
  usuarios: Array<Usuario>;

  constructor() {}

  ngOnInit(): void {
    this.usuarios = UsuarioService.getListUsuario();
  }

  deletar(usuario: Usuario): void {
    const msgConfirma = `Tem certeza que deseja deletar usuario: ${usuario.nome}?`;
    if (confirm(msgConfirma)) {
      if (UsuarioService.deletarUsuario(usuario)) {
        alert('deletou');
        const users = UsuarioService.getListUsuario();
        this.usuarios = users; // new MatTableDataSource(users);
        // filter((el) => el.id !== usuario.id);
      } else {
        alert('não deletou');
      }
    }
  }

}
