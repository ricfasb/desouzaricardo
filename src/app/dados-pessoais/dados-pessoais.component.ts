import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../historico/historico.service';
import { Pessoa } from '../models/pessoa.model';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  pessoa: Pessoa;

  constructor(private historicoService: HistoricoService) { }

  ngOnInit(): void {
    this.historicoService.dadosPessoais().subscribe((pessoa : Pessoa) => {
      this.pessoa = pessoa;
    });
  }

}
