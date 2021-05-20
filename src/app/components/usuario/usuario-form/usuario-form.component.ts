
// Angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// projeto
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  formUser: FormGroup;
  usuario: Usuario = new Usuario();
  editando = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.formUserBuild();

    if (id != null) {
      this.formUser.setValue(UsuarioService.findUsuarioById(id));
      this.editando = true;
    }
  }

  formUserBuild(): void {
    this.formUser = this.formBuilder.group({
      id: [null, [Validators.required]],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      login: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.editando) {
      UsuarioService.updateUsuario(this.formUser.value);
    } else {
      UsuarioService.insertUsuario(this.formUser.value);
    }
    this.router.navigateByUrl('usuario');
  }

  resetar(): void {
    this.editando = false;
    this.formUser.reset();
  }





  mostrarError(){

  }
}
