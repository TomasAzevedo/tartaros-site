import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
  ],
  exports: [
    MDBBootstrapModulesPro
  ],
  providers: [MDBSpinningPreloader],
  declarations: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
