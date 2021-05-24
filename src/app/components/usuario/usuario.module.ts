import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

// angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// projeto
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [UsuarioComponent, UsuarioFormComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,

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
export class UsuarioModule {}
