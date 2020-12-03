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

  public atualizarPreco(apartamento: Apartamento, quantidade: number){
    if(!apartamento.precoOriginal){
      apartamento.precoOriginal = apartamento.preco;
    }
    if(quantidade <= 0){
      quantidade = 1;
      apartamento.quantidade = quantidade;
    }
    apartamento.preco = apartamento.precoOriginal * quantidade;
    this.carrinhoCompras.atualizar(this.apartamentos);
  }

  public remover(apartamento: Apartamento){
    this.carrinhoCompras.removerApartamento(apartamento);
    this.apartamentos = this.carrinhoCompras.obterApartamentos();
  }
}
