import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private baseURL: string;
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
    return this.http.post<Usuario>(this.baseURL + "api/usuario", body, {headers});
  }
}
