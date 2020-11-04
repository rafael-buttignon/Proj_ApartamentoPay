import { Component, OnInit } from '@angular/core';
import { Apartamento } from '../models/apartamento';
import { ApartamentoService } from './apartamento.service';

@Component({
  selector: 'app-apartamento',
  templateUrl: './apartamento.component.html',
  styleUrls: ['./apartamento.component.css']
})
export class ApartamentoComponent implements OnInit {
  public apartamento: Apartamento

  constructor(private apartamentoServico: ApartamentoService) { }

  ngOnInit() {
    this.apartamento = new Apartamento();
  }

  public cadastrar(){
    // this.apartamento
    this.apartamentoServico.cadastrar(this.apartamento)
      .subscribe(
        apartamentoJson => {
          console.log(apartamentoJson);
         },
        e => { 
          console.log(e.error);
        }
      );
  }

}
