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
  public arquivoSelecionado: File;

  constructor(private apartamentoServico: ApartamentoService) { }

  ngOnInit() {
    this.apartamento = new Apartamento();
  }

  public inputChange(files: FileList){
    this.arquivoSelecionado = files.item(0);
    this.apartamentoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        retorno => { 
          console.log(retorno);
        }, 
        e => { 
          console.log(e.error)
        });
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
