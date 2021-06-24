// angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// projeto
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  colunasTabela = ['id', 'nome', 'login', 'perfil', 'acoes'];
  usuarios: any; // = new MatTableDataSource<Usuario>();

  /// @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit(): void {
  //   this.usuarios.paginator = this.paginator;
  // }

  constructor() {
    const users = UsuarioService.getListUsuario();
    this.usuarios = users; // new MatTableDataSource(users);
  }

  ngOnInit(): void {
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

  // convert<T>(array: Array<T>): Observable<Array<T>> {
  //   return of(array);
  // }
}
