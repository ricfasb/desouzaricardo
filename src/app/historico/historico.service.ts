import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  
  private url = 'http://localhost:8080/';
  private urlDadosPessoais = this.url + 'dadospessoais';
  private urlExperiencias = this.url + 'experiencias';
  private urlFormacoes = this.url + 'formacoes';
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

  formacoes() {
    return this.httClient.get(this.urlFormacoes, {
      headers: this.corsHeaders
    });
  }

}
