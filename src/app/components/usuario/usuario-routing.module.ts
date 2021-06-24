// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// projeto
import { UsuarioComponent } from './usuario.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { FormDeactivateGuard } from 'src/app/shared/guards/form-deactivate.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilFormComponent } from './perfil/perfil-form/perfil-form.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: UsuarioComponent },
  {
    path: 'form',
    component: UsuarioFormComponent,
    canDeactivate: [FormDeactivateGuard],
  },
  {
    path: 'form/:id',
    component: UsuarioFormComponent,
    canDeactivate: [FormDeactivateGuard],
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'perfil/form-perfil',
    component: PerfilFormComponent,
    canDeactivate: [FormDeactivateGuard],
  },
  {
    path: 'perfil/form-perfil/:id',
    component: PerfilFormComponent,
    canDeactivate: [FormDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
