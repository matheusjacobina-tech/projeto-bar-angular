// angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// projeto
import { IFormDeactivate } from '../../../../shared/guards/IFormDeactivate';
import { Perfil } from '../../../../core/model/perfil.model';
import { UsuarioService } from '../../../../core/service/usuario.service';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit, IFormDeactivate {
  formPerfil: FormGroup;
  perfil: Perfil = new Perfil();

  editando = false;
  submit = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.formUserBuild();

    if (id != null) {
      this.formPerfil.setValue(UsuarioService.findPerfilById(id));
      this.editando = true;
    }
  }

  formUserBuild(): void {
    this.formPerfil = this.formBuilder.group({
      id: [null, [Validators.required]],
      perfil: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]]
    });
  }

  onSubmit(): void {
    if (this.editando) {
      UsuarioService.updatePerfil(this.formPerfil.value);
    } else {
      const insert = UsuarioService.insertPerfil(this.formPerfil.value);
      if (insert){
        alert('Inseriu com sucesso');
      }
    }
    this.submit = true;
    this.router.navigateByUrl('usuario/perfil');
  }

  resetar(): void {
    this.editando = false;
    this.formPerfil.reset();
  }

  getError(campo: string): Array<string> {
    const control = this.formPerfil.get(campo);
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
}
