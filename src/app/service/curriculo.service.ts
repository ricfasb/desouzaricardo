import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  private url = 'https://ricardospringapi.herokuapp.com/';
  private urlDadosPessoais = this.url + 'dadospessoais';
  private urlExperiencias = this.url + 'experiencias';
  private urlFormacoes = this.url + 'formacoes';
  private corsHeaders: HttpHeaders;

  constructor(private httClient: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
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
