
// angular
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// projeto
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Array<Usuario>;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuarios = UsuarioService.getListUsuario();
  }

  deletar(usuario: Usuario): void {
    const msgConfirma = `Tem certeza que deseja deletar usuario: ${usuario.nome}?`;
    if (confirm(msgConfirma)) {
      if (UsuarioService.deletarUsuario(usuario)){
        alert('deletou');
        this.usuarios = this.usuarios.filter(el => el.id !== usuario.id);
      } else {
        alert('não deletou');
      }
    }
  }
}
