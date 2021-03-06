import { Component, ViewChild } from '@angular/core';
import { ErroMsgComponent } from '../../components/erro-msg/erro-msg.component';
import { PessoaService } from '../../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../model/pessoa';
import { TouchSequence } from 'selenium-webdriver';
import { ExperienciaProfissionalService } from 'src/app/services/experiencia-profissional.service';
import { ExperienciaProfissional } from 'src/app/model/experiencia-profissional';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent {
  public pessoa: Pessoa;
  public experienciasProfissionais: ExperienciaProfissional[] = [];
  @ViewChild(ErroMsgComponent) erroMsgComponent: ErroMsgComponent;

  constructor(
    private pessoaService: PessoaService,
    private experienciaService: ExperienciaProfissionalService,
    private activetedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.getPessoa(this.activetedRoute.snapshot.params.id);
  }

  getPessoa(id: number) {
    this.pessoaService.getPessoa(id)
      .subscribe((pessoa: Pessoa) => {
        this.pessoa = pessoa;
        this.experienciasProfissionais = this.pessoa.experienciasProfissionais;
      }, () => { this.erroMsgComponent.setError('Falha ao obter pessoa'); });
  }

  updatePessoa(pessoa: Pessoa) {
    pessoa.data_nascimento = this.formatData(pessoa.data_nascimento);
    this.pessoaService.updatePessoa(pessoa)
      .subscribe(
        () => { this.router.navigateByUrl('/'); },
        (error) => { this.erroMsgComponent.setError(`${error.error.msg}: ${error.error.errors[0].message}`); });
  }

  formatData = data => {
    return data.substring(0, 2) + "/" + data.substring(2, 4) + "/" + data.substring(4, 8);
  }

}
