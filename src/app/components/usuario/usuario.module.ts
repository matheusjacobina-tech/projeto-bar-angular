// angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';

// projeto
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PerfilFormComponent } from './perfil/perfil-form/perfil-form.component';

@NgModule({
  declarations: [UsuarioComponent, UsuarioFormComponent, PerfilComponent, PerfilFormComponent],
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
    MatSelectModule
  ],
})
export class UsuarioModule {}
