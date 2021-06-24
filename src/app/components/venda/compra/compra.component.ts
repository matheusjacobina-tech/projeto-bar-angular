// angular
import { Component, OnInit } from '@angular/core';
// projeto
import { Produto } from 'src/app/core/model/produto.model';
import { ProdutoService } from 'src/app/core/service/produto.service';
import { VendaService } from 'src/app/core/service/venda.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  produtos: Array<Produto>;

  constructor(private produtoService: ProdutoService, private vendaService: VendaService) {}

  ngOnInit(): void {
    this.produtos = this.produtoService.getListProduto();
  }

  adicionarProduto(item: Produto): void {
    this.vendaService.adicionarProdutoVenda(item);
  }
}
