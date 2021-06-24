// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// projeto
import { ProdutoComponent } from './produto.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { FormDeactivateGuard } from 'src/app/shared/guards/form-deactivate.guard';

const routes: Routes = [
  { path: '', component: ProdutoComponent },
  {
    path: 'form-produto',
    component: ProdutoFormComponent,
    canDeactivate: [FormDeactivateGuard],
  },
  {
    path: 'form-produto/:id',
    component: ProdutoFormComponent,
    canDeactivate: [FormDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoRoutingModule {}
