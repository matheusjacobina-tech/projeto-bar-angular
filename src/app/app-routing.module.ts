import { VendaComponent } from './components/venda/venda.component';
// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// projeto
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./components/usuario/usuario.module').then(
        (module) => module.UsuarioModule
      ),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  {
    path: 'produto',
    loadChildren: () =>
      import('./components/produto/produto.module').then(
        (module) => module.ProdutoModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'venda',
    loadChildren: () =>
      import('./components/venda/venda.module').then(
        (module) => module.VendaModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
