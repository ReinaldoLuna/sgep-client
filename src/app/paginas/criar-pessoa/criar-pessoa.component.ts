import { Component, ViewChild } from '@angular/core';
import { ErroMsgComponent } from '../../compartilhado/erro-msg/erro-msg.component';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/interfaces/pessoa';

@Component({
  selector: 'app-criar-pessoa',
  templateUrl: './criar-pessoa.component.html',
  styleUrls: ['./criar-pessoa.component.css']
})
export class CriarPessoaComponent {
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(private pessoaService: PessoaService, private router: Router) { }

  addPessoa(pessoa: Pessoa) {
    this.pessoaService.addPessoa(pessoa)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        () => { this.erroMsgComponent.setError('Falha ao salvar pessoa'); });
  }

}