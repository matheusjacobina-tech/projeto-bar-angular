import { Observable, of } from 'rxjs';
// angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// projeto
import { Venda } from 'src/app/core/model/venda.model';
import { VendaService } from 'src/app/core/service/venda.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css'],
})
export class VendaComponent implements OnInit {
  colunasTabela = ['id', 'data', 'nome', 'acoes'];
  vendas: Venda[];

  constructor(private vendaService: VendaService, private router: Router) { }

  ngOnInit(): void {
    this.vendas = this.vendaService.getListVenda();
  }

  gerarVenda(): void {
    this.vendaService.gerarVenda();
    this.vendas = this.vendaService.getListVenda().filter(i => i);
  }

  inicioCompra(venda: Venda): void {
    this.vendaService.inicioCompra(venda);
    this.router.navigate(['compra']);
  }
}
