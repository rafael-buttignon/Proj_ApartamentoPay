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
  public ativar_spinner: boolean;
  public mensagem: string;

  constructor(private apartamentoServico: ApartamentoService) { }

  ngOnInit() {
    this.apartamento = new Apartamento();
  }

  public inputChange(files: FileList){
    this.arquivoSelecionado = files.item(0);
    this.ativar_spinner = true;
    this.apartamentoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => { 
          this.apartamento.nomeArquivo = nomeArquivo;
          console.log(nomeArquivo);
          this.ativar_spinner = false;
        }, 
        e => { 
          console.log(e.error)
        });
  }

  public cadastrar(){
    this.apartamentoServico.cadastrar(this.apartamento)
      .subscribe(
        apartamentoJson => {
          console.log(apartamentoJson);
         },
        e => { 
          console.log(e.error);
          this.mensagem = e.error;
        }
      );
  }
}
