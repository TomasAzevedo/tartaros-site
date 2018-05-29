import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { SharedModule } from '../shared/shared.module';
import { IntroducaoComponent } from './introducao/introducao.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [BarraNavegacaoComponent, IntroducaoComponent],
  exports: [
    BarraNavegacaoComponent,
    IntroducaoComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class CoreModule { }
