import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa.model';
import { CurriculoService } from '../service/curriculo.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  pessoa: Pessoa;

  constructor(private curriculoService: CurriculoService) { }

  ngOnInit(): void {
    this.curriculoService.dadosPessoais().subscribe((pessoa : Pessoa) => {
      this.pessoa = pessoa;
    });
  }

}
