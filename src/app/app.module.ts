// angular
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
// material form
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

// projeto
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioModule } from './components/usuario/usuario.module';
import { ProdutoModule } from './components/produto/produto.module';
import { ProdutoService } from './core/service/produto.service';
import { VendaModule } from './components/venda/venda.module';
import { LoginService } from './core/service/login.service';
import { AuthGuard } from './core/guards/auth.guard';
import { VendaService } from './core/service/venda.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, MainNavComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    UsuarioModule,
    ProdutoModule,
    VendaModule,

    // MaterialModule
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    // material form
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
