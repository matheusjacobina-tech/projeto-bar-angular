import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { UsuarioFormComponent } from "./components/usuario/usuario-form/usuario-form.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario/form', component: UsuarioFormComponent },
    { path: 'usuario/form/:id', component: UsuarioFormComponent },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
