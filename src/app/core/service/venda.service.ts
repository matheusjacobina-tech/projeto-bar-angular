import { Usuario } from './../model/usuario.model';
import { ItemVenda } from './../model/venda.model';
import { Injectable } from '@angular/core';
import { Venda } from '../model/venda.model';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root',
})
export class VendaService {

  compra: Venda;
  itemCompra: Array<ItemVenda> = [];


  itemVenda: Array<ItemVenda> = [{
    venda: {
      id: 1,
      dataVenda: new Date('25 Mar 2010'),
      usuario: {
        id: 1,
        nome: 'julia',
        login: 'admin',
        senha: '123',
        perfil: { id: 1, perfil: 'Administrador' },
      },
    },
    produto: {
      id: 1,
      nome: 'Coca-Cola 2L',
      descricao: 'Refrigerante',
      valor: 8,
    },
    quantidade: 1
  }];

  vendas: Array<Venda> = [
    {
      id: 1,
      dataVenda: new Date('25 Mar 2010'),
      usuario: {
        id: 1,
        nome: 'julia',
        login: 'admin',
        senha: '123',
        perfil: { id: 1, perfil: 'Administrador' },
      },
    },
  ];


  constructor() { console.log('venda service'); }

  insertVenda(venda: Venda): boolean {
    this.vendas.push(venda);
    return true;
  }

  getListVenda(): Venda[] {
    return this.vendas;
  }

  findVendaById(id: any): Venda {
    for (const venda of this.vendas) {
      if (venda.id == id) {
        return venda;
      }
    }
    return null;
  }

  updateVenda(venda: Venda): void {
    const result = this.findVendaById(venda.id);
    if (result) {
      const index = this.vendas.indexOf(result);
      this.vendas[index] = venda;
    }
  }

  deletarVenda(venda: Venda): boolean {
    const result = this.findVendaById(venda.id);
    if (result) {
      this.vendas.filter((el: Venda) => el.id !== venda.id);
      return true;
    }
    return false;
  }




  //  Funcionalidades
  //  Compra
  //  ItemCompra
  //
  gerarVenda(): void {
    const id: number = this.vendas.length + 1;
    const user: Usuario = JSON.parse(localStorage.getItem('usuario'));
    const data = new Date(Date.now());

    const venda = new Venda(id, user, data);
    this.insertVenda(venda);
  }

  inicioCompra(venda: Venda): void {
    console.log(this.compra);
    this.compra = venda;
    console.log(this.compra);
  }

  adicionarProdutoVenda(item: Produto): void {
    // cria itemVenda
    const len = this.itemCompra.filter( i => i.venda.id == this.compra.id && i.produto.id == item.id).length;
    if (len === 0) {
      this.itemCompra.push({
        venda: this.compra,
        produto: item,
        quantidade: 1
      });
    } else {
      // soma quantidade no itemVenda
      this.itemCompra
      .filter(i => i.venda.id == this.compra.id && i.produto.id == item.id)
      .map(i => i.quantidade += 1);
    }
  }

  findItemCompraProdutoById(id: any): Produto {
    for (const item of this.itemCompra) {
      if (item.produto.id == id) {
        return item.produto;
      }
    }
    return null;
  }

  deletarProdutoVenda(produto: Produto): boolean {
    const result = this.findItemCompraProdutoById(produto.id);
    if (result) {
      this.itemCompra = this.itemCompra.filter(el => el.produto.id !== produto.id);
      return true;
    }
    return false;
  }

  calcularValor(): number {
    let valor = 0;
    this.itemCompra.map(
      i => valor += i.quantidade * i.produto.valor
    );
    return valor;
  }
}
