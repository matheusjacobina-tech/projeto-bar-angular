// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// projeto
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./components/usuario/usuario.module').then(
        (module) => module.UsuarioModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
