import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario;
  public usuarioAutenticado: boolean;

  constructor() {
    this.usuario = new Usuario();
   }

  ngOnInit() {
  }

   entrar(){
     if(this.usuario.email == "rafa@teste.com" && this.usuario.senha == "abc123"){
       this.usuarioAutenticado = true;
     }
   }

}
