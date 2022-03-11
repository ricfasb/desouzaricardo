import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../models/experiencia.model';
import { CurriculoService } from '../service/curriculo.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  listaExperiencias: Experiencia[];

  constructor(private curriculoService: CurriculoService) { 
    this.listaExperiencias = [];
  }

  ngOnInit(): void {
    this.curriculoService.experiencias().subscribe((experiencias : Experiencia[]) => {
      this.listaExperiencias = experiencias;
    });
  }

}
