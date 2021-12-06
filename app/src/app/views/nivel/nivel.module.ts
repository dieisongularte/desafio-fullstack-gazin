import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelRoutingModule } from './nivel-routing.module';
import { NivelListComponent } from './list/nivel-list.component';
import { NivelFormComponent } from './form/nivel-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NivelListComponent,
    NivelFormComponent
  ],
  imports: [
    CommonModule,
    NivelRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NivelModule { }
