import { Produto } from './../../../core/model/produto.model';
// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// projeto
import { ItemVenda, Venda } from 'src/app/core/model/venda.model';
import { VendaService } from 'src/app/core/service/venda.service';

@Component({
  selector: 'app-venda-form',
  templateUrl: './venda-form.component.html',
  styleUrls: ['./venda-form.component.css'],
})
export class VendaFormComponent implements OnInit {
  colunasTabela = ['id', 'nome', 'quantidade', 'valor', 'acoes'];
  compra: Venda;
  itemCompra: Array<ItemVenda>;
  valorFinal: number;

  constructor(private vendaService: VendaService, private router: Router) {}

  ngOnInit(): void {
    this.compra = this.vendaService.compra;
    this.itemCompra = this.vendaService.itemCompra;
    this.valorFinal = this.calcularValor();

    console.log(this.valorFinal);
    console.log(this.itemCompra);

    if (this.compra == null) {
      alert('Selecione um Venda');
      this.router.navigate(['venda']);
    }
  }

  dataFormatado(): string {
    return `${this.compra.dataVenda.getDate()}/${
      this.compra.dataVenda.getMonth() + 1
    }/${this.compra.dataVenda.getFullYear()}`;
  }

  calcularValor(): number {
    return this.vendaService.calcularValor();
  }

  deletar(produto: Produto): void {
    const msgConfirma = `Tem certeza que deseja deletar produto: ${produto.nome}?`;
    if (confirm(msgConfirma)) {
      if (this.vendaService.deletarProdutoVenda(produto)) {
        alert('deletou');
        this.itemCompra = this.itemCompra.filter(el => el.produto.id !== produto.id);
        console.log(this.itemCompra);
        this.valorFinal = this.calcularValor();
      } else {
        alert('não deletou');
      }
    }
  }
}
