import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationInfoRoutingModule } from './application-info-routing.module';
import { ApplicationInfoComponent } from './application-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ApplicationInfoComponent
  ],
  imports: [
    CommonModule,
    ApplicationInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ApplicationInfoComponent
  ]
})
export class ApplicationInfoModule { }
