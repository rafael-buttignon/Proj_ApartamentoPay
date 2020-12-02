import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApartamentoService } from 'src/app/apartamento/apartamento.service';
import { Apartamento } from 'src/app/models/apartamento';
import { LojaCarrinhoComprasComponent } from '../carrinho/loja-carrinho-compras/loja-carrinho-compras.component';

@Component({
  selector: 'app-loja-apartamento',
  templateUrl: './loja-apartamento.component.html',
  styleUrls: ['./loja-apartamento.component.css']
})
export class LojaApartamentoComponent implements OnInit {

  public apartamento: Apartamento;
  public carrinhoCompras: LojaCarrinhoComprasComponent;

  ngOnInit(): void{
    this.carrinhoCompras = new LojaCarrinhoComprasComponent();
    var apartamentoDetalhe = sessionStorage.getItem('apartamentoDetalhe');
    if(apartamentoDetalhe){
      this.apartamento = JSON.parse(apartamentoDetalhe)
    }
  }
  
  constructor(private apartamentoServico: ApartamentoService, private router: Router) { 

  }

  public alugar(){
    this.carrinhoCompras.adicionar(this.apartamento);
    this.router.navigate(["/loja-efetivar"]);
  }

}
