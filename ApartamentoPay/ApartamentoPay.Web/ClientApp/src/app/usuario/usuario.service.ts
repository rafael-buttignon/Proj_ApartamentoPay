import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private baseURL: string;
  private _usuario: Usuario;


  set usuario(usuario: Usuario){
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
    this._usuario = usuario;
  }

  get usuario(): Usuario{
    let usuario_json = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuario_json);
    return this._usuario;
  }
  
  public usuario_autenticado(): boolean {
    return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
  }

  public limpar_sessao(){
    sessionStorage.setItem("usuario-autenticado", "");
    this._usuario = null;
  }

  get headers() : HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.baseURL = baseUrl;

  }

  public verificarUsuario(usuario: Usuario): Observable<Usuario>{
    
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      email: usuario.email,
      senha: usuario.senha
    }
    //this.baseURL = raiz do site que pode ser exemplo.: http://www.apartamentopay.com/
    return this.http.post<Usuario>(this.baseURL + "api/usuario/verificarUsuario", body, {headers});
    // api/usuario/verificar
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseURL + "api/usuario", JSON.stringify(usuario), { headers: this.headers });
  }
}
