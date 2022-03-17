import { Component, OnInit } from '@angular/core';
import { TokenService } from './autenticacao/token.service';
import { AutenticacaoService } from './service/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  email: string = 'ricardosouzatdf@gmail.com';
  senha: string = 'senhaRic@rdoSpringAPI';
  
  constructor(
    private autenticacaoService: AutenticacaoService, 
    private tokenService: TokenService ) {}
  
    title = '::: Ricardo :::';

  ngOnInit(): void {
    this.autenticacaoService.autenticar(this.email, this.senha).subscribe((res) => {
      this.tokenService.salvaToken(res.token);
    });
  }
}
