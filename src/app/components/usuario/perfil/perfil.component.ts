
import { UsuarioService } from './../../../core/service/usuario.service';
import { Perfil } from './../../../core/model/perfil.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  colunasTabela = ['id', 'perfil', 'acoes'];
  perfis: Array<Perfil>;

  constructor() {}

  ngOnInit(): void {
    this.perfis = UsuarioService.getListPerfil();
  }

  deletar(perfil: Perfil): void {
    const msgConfirma = `Tem certeza que deseja deletar Perfil: ${perfil.perfil}?`;
    if (confirm(msgConfirma)) {
      if (UsuarioService.deletarPerfil(perfil)) {
        alert('deletou');
        this.perfis = this.perfis.filter((el) => el.id !== perfil.id);
      } else {
        alert('não deletou');
      }
    }
  }
}
