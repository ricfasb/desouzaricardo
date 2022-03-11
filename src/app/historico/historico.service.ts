import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  
  private urlDadosPessoais = 'http://localhost:8080/dadospessoais';
  private urlExperiencias = 'http://localhost:8080/experiencias';
  private corsHeaders: HttpHeaders;

  constructor(private httClient: HttpClient) {
    
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  dadosPessoais() {
    return this.httClient.get(this.urlDadosPessoais, {
      headers: this.corsHeaders
    });
  }

  experiencias() {
    return this.httClient.get(this.urlExperiencias, {
      headers: this.corsHeaders
    });
  }

}
