import { Component, OnInit } from '@angular/core';
import { Apartamento } from 'src/app/models/apartamento';
import { LojaCarrinhoComprasComponent } from '../../carrinho/loja-carrinho-compras/loja-carrinho-compras.component';

@Component({
  selector: 'app-loja-efetivar',
  templateUrl: './loja-efetivar.component.html',
  styleUrls: ['./loja-efetivar.component.css']
})
export class LojaEfetivarComponent implements OnInit {

  public carrinhoCompras: LojaCarrinhoComprasComponent;
  public apartamentos: Apartamento[];

  constructor() { }

  ngOnInit() {
    this.carrinhoCompras = new LojaCarrinhoComprasComponent();
    this.apartamentos = this.carrinhoCompras.obterApartamentos();
  }

}
