// angular
import { Injectable } from '@angular/core';
// projeto
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produtos: Array<Produto> = [
    {
      id: 1,
      nome: 'Coca-Cola 2L',
      descricao: 'Refrigerante',
      valor: 8,
    },
  ];

  constructor() {}

  insertProduto(produto: Produto): boolean {
    this.produtos.push(produto);
    return true;
  }

  getListProduto(): Produto[] {
    return this.produtos;
  }

  findProdutoById(id: any): Produto {
    for (const prod of this.produtos) {
      if (prod.id == id) {
        return prod;
      }
    }
    return null;
  }

  updateProduto(produto: Produto): void {
    const result = this.findProdutoById(produto.id);
    if (result) {
      const index = this.produtos.indexOf(result);
      this.produtos[index] = produto;
    }
  }

  deletarProduto(produto: Produto): boolean {
    const result = this.findProdutoById(produto.id);
    if (result) {
      this.produtos.filter((el: Produto) => el.id !== produto.id);
      return true;
    }
    return false;
  }
}
