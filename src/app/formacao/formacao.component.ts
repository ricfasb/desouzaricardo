import { Component, OnInit } from '@angular/core';
import { Formacao } from '../models/formacao.model';
import { HistoricoService } from '../historico/historico.service';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.scss']
})
export class FormacaoComponent implements OnInit {

  listaFormacoes: Formacao[];
  
  constructor(private historicoService: HistoricoService) { 
    this.listaFormacoes = []
  }

  ngOnInit(): void {
    this.historicoService.formacoes().subscribe((formacoes : Formacao[]) => {
      this.listaFormacoes = formacoes;
    });
  }

}
