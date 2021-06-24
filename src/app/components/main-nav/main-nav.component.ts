// angular
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
// projeto
import { UsuarioService } from 'src/app/core/service/usuario.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private router: Router) {}

  logadoNav(): boolean {
    return UsuarioService.logado();
  }

  logout(): void {
    UsuarioService.deslogado();
    this.router.navigate(['login']);
  }
}
