import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesenvolvedorRoutingModule } from './desenvolvedor-routing.module';
import { DesenvolvedorListComponent } from './list/desenvolvedor-list.component';
import { DesenvolvedorFormComponent } from './form/desenvolvedor-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DesenvolvedorListComponent,
    DesenvolvedorFormComponent
  ],
  imports: [
    CommonModule,
    DesenvolvedorRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DesenvolvedorModule { }
