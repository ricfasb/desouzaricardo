import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoricoComponent } from './historico/historico.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoricoComponent,
    DadosPessoaisComponent,
    TecnologiasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
