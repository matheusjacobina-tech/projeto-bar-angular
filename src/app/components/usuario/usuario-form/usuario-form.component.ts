// Angular
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// projeto
import { UsuarioService } from './../../../core/service/usuario.service';
import { Usuario } from './../../../core/model/usuario.model';
import { Perfil } from './../../../core/model/perfil.model';
import { IFormDeactivate } from './../../../shared/guards/IFormDeactivate';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
})
export class UsuarioFormComponent implements OnInit, IFormDeactivate {
  formUser: FormGroup;
  usuario: Usuario = new Usuario();
  perfis: Array<Perfil>;
  selectedPerfil = new FormControl();

  editando = false;
  submit = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.perfis = UsuarioService.getListPerfil();
    this.formUserBuild();
    if (id != null) {
      this.formUser.patchValue(UsuarioService.findUsuarioById(id));
      // this.selectedPerfil = this.formUser.get('perfil').value.id;
      this.editando = true;
    }
  }

  formUserBuild(): void {
    this.formUser = this.formBuilder.group({
      id: [null, [Validators.required]],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(35),
        ],
      ],
      login: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      perfil: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.editando) {
      UsuarioService.updateUsuario(this.formUser.value);
    } else {
      const insert = UsuarioService.insertUsuario(this.formUser.value);
      if (insert){
        alert('Inseriu com sucesso');
      }
    }
    this.submit = true;
    this.router.navigateByUrl('usuario');
  }

  resetar(): void {
    this.editando = false;
    this.formUser.reset();
  }

  getError(campo: string): Array<string> {
    const control = this.formUser.get(campo);
    const msg: Array<string> = Array<string>();
    if (control.errors.required) {
      msg.push(`Digite o Valor`);
    }
    if (control.errors.minlength) {
      const atual = control.errors.minlength.actualLength;
      const requirido = control.errors.minlength.requiredLength;
      msg.push(`tamanho: ${atual} | ${requirido}`);
    }
    return msg;
  }

  podeDesativar(): boolean {
    if (this.submit) {
      return true;
    }
    return confirm('Deseja sair');
  }

  compararPerfil(ob1, ob2): boolean {
    return ob1 && ob2 ? (ob1.id === ob2.id) : false;
  }
}
