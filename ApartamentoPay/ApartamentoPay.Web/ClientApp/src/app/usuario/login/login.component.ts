import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario;
  public usuarioAutenticado: boolean;
  public returnUrl: string;
  public mensagem: string;
  private ativar_spinner: boolean;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private usuarioServico: UsuarioService) {
   }

  ngOnInit() {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

   entrar(){
    this.ativar_spinner = true;
    this.usuarioServico.verificarUsuario(this.usuario)
    .subscribe(
      usuario_json => {
       this.usuarioServico.usuario = usuario_json;

       if(this.returnUrl == null){
         this.router.navigate(['/']);
       }else{
         this.router.navigate([this.returnUrl]);
       }
      },
      err => {
        console.log(err.error);
        this.mensagem = "Usuario ou senha invalida!";
        this.ativar_spinner = false;
      }
    );
   }

}
