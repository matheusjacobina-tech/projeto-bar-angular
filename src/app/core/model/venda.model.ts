import { Produto } from './produto.model';
import { Usuario } from './usuario.model';

export class ItemVenda {
  venda: Venda;
  produto: Produto;
  quantidade: number;
}

export class Venda {
  id: number;
  usuario: Usuario;
  dataVenda: Date;

  constructor(
    id: number,
    usuario: Usuario,
    dataVenda: Date
  ){
    this.id = id;
    this.usuario = usuario;
    this.dataVenda = dataVenda;
  }
}
