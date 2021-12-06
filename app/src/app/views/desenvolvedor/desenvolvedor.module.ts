import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesenvolvedorRoutingModule } from './desenvolvedor-routing.module';
import { DesenvolvedorListComponent } from './list/desenvolvedor-list.component';
import { DesenvolvedorFormComponent } from './form/desenvolvedor-form.component';


@NgModule({
  declarations: [
    DesenvolvedorListComponent,
    DesenvolvedorFormComponent
  ],
  imports: [
    CommonModule,
    DesenvolvedorRoutingModule
  ]
})
export class DesenvolvedorModule { }
