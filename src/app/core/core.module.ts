import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { SharedModule } from '../shared/shared.module';
import { IntroducaoComponent } from './introducao/introducao.component';
import { SaboresComponent } from './sabores/sabores.component';
import { RouterModule } from '@angular/router';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [BarraNavegacaoComponent, IntroducaoComponent, SaboresComponent, RodapeComponent, ContatoComponent],
  exports: [
    BarraNavegacaoComponent,
    IntroducaoComponent,
    SaboresComponent,
    RodapeComponent,
    ContatoComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class CoreModule { }
