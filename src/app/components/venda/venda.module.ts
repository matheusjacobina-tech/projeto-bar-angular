// angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// material
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
// projeto
import { VendaRoutingModule } from './venda-routing.module';
import { VendaComponent } from './venda.component';
import { VendaFormComponent } from './venda-form/venda-form.component';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  declarations: [VendaComponent, VendaFormComponent, CompraComponent],
  imports: [
    CommonModule,
    VendaRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    // MaterialModule
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    // material form
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
  ],
})
export class VendaModule {}
