// angular
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// projeto
import { Produto } from './../../../core/model/produto.model';
import { ProdutoService } from 'src/app/core/service/produto.service';
import { IFormDeactivate } from 'src/app/shared/guards/IFormDeactivate';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
})
export class ProdutoFormComponent implements OnInit, IFormDeactivate {
  formProduto: FormGroup;
  produto: Produto = new Produto();

  editando = false;
  submit = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.formProdutoBuild();
    if (id != null) {
      this.formProduto.patchValue(this.produtoService.findProdutoById(id));
      this.editando = true;
    }
  }

  formProdutoBuild(): void {
    this.formProduto = this.formBuilder.group({
      id: [null, [Validators.required]],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(35),
        ],
      ],
      descricao: [null, [Validators.required]],
      valor: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.editando) {
      this.produtoService.updateProduto(this.formProduto.value);
    } else {
      const insert = this.produtoService.insertProduto(this.formProduto.value);
      if (insert) {
        alert('Inseriu com sucesso');
      }
    }
    this.submit = true;
    this.router.navigateByUrl('produto');
  }

  resetar(): void {
    this.editando = false;
    this.formProduto.reset();
  }

  getError(campo: string): Array<string> {
    const control = this.formProduto.get(campo);
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
