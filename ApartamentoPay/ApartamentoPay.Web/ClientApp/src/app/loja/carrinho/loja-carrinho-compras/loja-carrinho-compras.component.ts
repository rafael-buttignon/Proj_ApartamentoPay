import { Component, OnInit } from '@angular/core';
import { Apartamento } from 'src/app/models/apartamento';

@Component({
  selector: 'app-loja-carrinho-compras',
  templateUrl: './loja-carrinho-compras.component.html',
  styleUrls: ['./loja-carrinho-compras.component.css']
})
export class LojaCarrinhoComprasComponent implements OnInit {

  public apartamentos: Apartamento[] = [];

  constructor() { }

  ngOnInit() {
  }

  public adicionar(apartamento: Apartamento){
    var apartamentoLocaStorage = localStorage.getItem("apartamentoLocaStorage");
    if(!apartamentoLocaStorage){
      // se não existir nada dentro do localStorage
      this.apartamentos.push(apartamento);
      localStorage.setItem("apartamentoLocaStorage", JSON.stringify(this.apartamentos));
    }else{
      // se ja existir pelo menos um unico item armazenado na sessão(localLocalStorage)
      this.apartamentos = JSON.parse(apartamentoLocaStorage);
      this.apartamentos.push(apartamento);
      localStorage.setItem("apartamentoLocaStorage", JSON.stringify(this.apartamentos));
    }
  }

  public obterApartamentos() : Apartamento[] {
      var apartamentoLocaStorage = localStorage.getItem("apartamentoLocaStorage");
      if(apartamentoLocaStorage)
        return JSON.parse(apartamentoLocaStorage);
  }

  public removerApartamento(apartamento: Apartamento){
    var apartamentoLocaStorage = localStorage.getItem("apartamentoLocaStorage");
    if(apartamentoLocaStorage){
      this.apartamentos = JSON.parse(apartamentoLocaStorage);
      this.apartamentos = this.apartamentos.filter(p => p.id != apartamento.id);
      localStorage.setItem("apartamentoLocaStorage", JSON.stringify(this.apartamentos));
    }
  }

  public atualizar(apartamento: Apartamento[]){
    localStorage.setItem("apartamentoLocaStorage", JSON.stringify(apartamento));
  }
}
