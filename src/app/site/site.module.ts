import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { HistoriaComponent } from './historia/historia.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [HomeComponent, HistoriaComponent],
  exports: [
    HomeComponent, HistoriaComponent
  ]
})
export class SiteModule { }
