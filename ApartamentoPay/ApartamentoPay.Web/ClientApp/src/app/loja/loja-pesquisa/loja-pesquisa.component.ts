import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApartamentoService } from 'src/app/apartamento/apartamento.service';
import { Apartamento } from 'src/app/models/apartamento';

@Component({
  selector: 'app-loja-pesquisa',
  templateUrl: './loja-pesquisa.component.html',
  styleUrls: ['./loja-pesquisa.component.css']
})
export class LojaPesquisaComponent implements OnInit {

  public apartamentos: Apartamento[];

  constructor(private apartamentoServico: ApartamentoService, private router: Router) { 
    this.apartamentoServico.obterTodosApartamentos().subscribe(
      apartamentos =>{
        this.apartamentos = apartamentos;
      },
      e => {
        console.log(e.error);
      })
  }

  ngOnInit() {
  }

  public abrirApartamento(apartamento: Apartamento){
    sessionStorage.setItem('apartamentoDetalhe', JSON.stringify(apartamento));
    this.router.navigate(['/loja-apartamento']);
  }

}
