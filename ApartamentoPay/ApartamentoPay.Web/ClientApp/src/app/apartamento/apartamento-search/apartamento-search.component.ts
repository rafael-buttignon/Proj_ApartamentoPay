import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private apartamentoService: ApartamentoService, private router: Router) {
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
    this.router.navigate(['/apartamento']);
  }

  public deletarApartamento(apartamento: Apartamento){
    var retorno = confirm("Desaja realmente deletar o apartamento selecionado ?");
    if(retorno == true){
      this.apartamentoService.deletar(apartamento).subscribe(
        apartamentos => {
          this.apartamentos = apartamentos;
        }, e => {
          console.log(e.errors);
        });
    }
  }

  public editarApartamento(apartamento: Apartamento){
    sessionStorage.setItem('apartamentoSession', JSON.stringify(apartamento));
    this.router.navigate(['/apartamento']);
  }

}
