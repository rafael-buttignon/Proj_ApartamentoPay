import { Component, OnInit } from '@angular/core';
import { Apartamento } from 'src/app/models/apartamento';
import { ApartamentoService } from '../apartamento.service';


@Component({
  selector: 'app-apartamento-search',
  templateUrl: './apartamento-search.component.html',
  styleUrls: ['./apartamento-search.component.css']
})
export class ApartamentoSearchComponent implements OnInit {

    public apartamentos: Apartamento[];
    
    ngOnInit() {
    }

  constructor(private apartamentoService: ApartamentoService) {
    this.getApartamentos();
  }

  public getApartamentos(){
    this.apartamentoService.obterTodosApartamentos()
    .subscribe(
      apartamentos => {
        this.apartamentos = apartamentos;
      },
       e => {
         console.log(e, "testeee");
       });
  }

  public adicionarProduto(){

  }

}
