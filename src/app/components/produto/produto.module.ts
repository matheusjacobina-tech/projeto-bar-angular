// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

// projeto
import { ProdutoComponent } from './produto.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  declarations: [ProdutoComponent, ProdutoFormComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,

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
export class ProdutoModule {}
