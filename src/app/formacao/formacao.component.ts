import { Component, OnInit } from '@angular/core';
import { Formacao } from '../models/formacao.model';
import { CurriculoService } from '../service/curriculo.service';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.scss']
})
export class FormacaoComponent implements OnInit {

  listaFormacoes: Formacao[];
  
  constructor(private curriculoService: CurriculoService) { 
    this.listaFormacoes = []
  }

  ngOnInit(): void {
    this.curriculoService.formacoes().subscribe((formacoes : Formacao[]) => {
      this.listaFormacoes = formacoes;
    });
  }

}
