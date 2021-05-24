// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

// projeto
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit, OnDestroy {
  colunasTabela = ['id', 'nome', 'login', 'senha'];
  usuarios: Array<Usuario>;
  usuarios$: Observable<Usuario>;
  inscricao$: Subscription;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarios = UsuarioService.getListUsuario();
    this.inscricao$ = this.convert<Usuario>(this.usuarios).subscribe((userArray: Array<Usuario>) => console.log(userArray));
  }

  ngOnDestroy(): void {
    this.inscricao$.unsubscribe();
  }

  deletar(usuario: Usuario): void {
    const msgConfirma = `Tem certeza que deseja deletar usuario: ${usuario.nome}?`;
    if (confirm(msgConfirma)) {
      if (UsuarioService.deletarUsuario(usuario)) {
        alert('deletou');
        this.usuarios = this.usuarios.filter((el) => el.id !== usuario.id);
      } else {
        alert('não deletou');
      }
    }
  }

  convert<T>(array: Array<T>): Observable<Array<T>> {
    return of(array);
  }
}
