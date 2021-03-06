import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErroMsgComponent } from './components/erro-msg/erro-msg.component';
import { ListaPessoasComponent } from './paginas/lista-pessoas/lista-pessoas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CriarPessoaComponent } from './paginas/criar-pessoa/criar-pessoa.component';
import { EditarPessoaComponent } from './paginas/editar-pessoa/editar-pessoa.component';
import { FormularioExpProfComponent } from './components/formulario-exp-prof/formulario-exp-prof.component';
@NgModule({
  declarations: [
    AppComponent,
    ErroMsgComponent,
    ListaPessoasComponent,
    FormularioComponent,
    CriarPessoaComponent,
    EditarPessoaComponent,
    FormularioExpProfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
