// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// projeto
import { UsuarioComponent } from './usuario.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent },
  { path: 'form', component: UsuarioFormComponent },
  { path: 'form/:id', component: UsuarioFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
