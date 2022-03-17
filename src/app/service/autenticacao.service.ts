import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  url: string = 'http://localhost:8080/auth';
  private corsHeaders: HttpHeaders;

  constructor(
    private httpClient: HttpClient
  ) { 
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' 
    });
  }

  autenticar(email: string, senha: string): Observable<any> {
    return this.httpClient.post(this.url, {
        email: email,
        senha: senha
    }, { headers: this.corsHeaders });
  }
}
