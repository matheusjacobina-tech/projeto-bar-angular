// angular
import { Component, OnInit } from '@angular/core';

// projeto
import { Produto } from './../../core/model/produto.model';
import { ProdutoService } from './../../core/service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
  produtos: Array<Produto>;
  colunasTabela = ['id', 'nome', 'valor', 'acoes'];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtos = this.produtoService.getListProduto();
  }

  deletar(produto: Produto): void {
    const msgConfirma = `Tem certeza que deseja deletar produto: ${produto.nome}?`;
    if (confirm(msgConfirma)) {
      if (this.produtoService.deletarProduto(produto)) {
        alert('deletou');
        this.produtos = this.produtos.filter((el) => el.id !== produto.id);
      } else {
        alert('não deletou');
      }
    }
  }
}
