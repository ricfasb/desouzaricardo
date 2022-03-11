import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../models/experiencia.model';
import { HistoricoService } from './historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  listaExperiencias: Experiencia[];

  constructor(private historicoService: HistoricoService) { 
    this.listaExperiencias = [];
  }

  ngOnInit(): void {
    this.historicoService.experiencias().subscribe((experiencias : Experiencia[]) => {
      this.listaExperiencias = experiencias;
    });
  }

}
