import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartamento } from '../models/apartamento';

@Injectable({
  providedIn: 'root'
})
export class ApartamentoService implements OnInit {

 

  private _baseUrl: string;
  public apartamentos: Apartamento[]; 


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this._baseUrl = baseUrl;
  }

  ngOnInit(): void {
    this.apartamentos = [];
  }

  get headers() : HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public cadastrar(apartamento: Apartamento): Observable<Apartamento> {
    
    return this.http.post<Apartamento>(this._baseUrl + "api/apartamento/cadastrar", JSON.stringify(apartamento), { headers: this.headers });
  }

  public salvar(apartamento: Apartamento): Observable<Apartamento> {
  
    return this.http.post<Apartamento>(this._baseUrl + "api/apartamento/salvar", JSON.stringify(apartamento), { headers: this.headers });
  }

  public deletar(apartamento: Apartamento): Observable<Apartamento> {
    
    return this.http.post<Apartamento>(this._baseUrl + "api/apartamento/deletar", JSON.stringify(apartamento), { headers: this.headers });
  }

  public obterTodosApartamentos(): Observable<Apartamento[]> {
    
    return this.http.get<Apartamento[]>(this._baseUrl + "api/apartamento");
  }

  public obterApartamento(apartamentoId: number): Observable<Apartamento>{
    return this.http.get<Apartamento>(this._baseUrl + "api/apartamento/obterPorId");
  }

  public enviarArquivo(arquivoSelecionado: File) : Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name)
    return this.http.post<boolean>(this._baseUrl + "api/apartamento/enviarArquivo", formData);
  }
}
