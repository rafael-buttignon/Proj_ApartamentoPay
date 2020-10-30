import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public usuario: Usuario;

  constructor(private usuarioServico: UsuarioService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  	public cadastrar(){
       this.usuarioServico.cadastrarUsuario(this.usuario)
           .subscribe(
             usuarioJson => { },
             e => { }
           );
    }

}
