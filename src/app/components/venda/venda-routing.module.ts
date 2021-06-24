import { CompraComponent } from './compra/compra.component';
// angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// projeto
import { VendaComponent } from './venda.component';
import { VendaFormComponent } from './venda-form/venda-form.component';

const routes: Routes = [
  { path: '', component: VendaComponent },
  {
    path: 'form-venda',
    component: VendaFormComponent,
  },
  {
    path: 'compra',
    component: CompraComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendaRoutingModule {}
