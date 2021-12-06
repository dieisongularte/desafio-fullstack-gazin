import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelRoutingModule } from './nivel-routing.module';
import { NivelListComponent } from './list/nivel-list.component';
import { NivelFormComponent } from './form/nivel-form.component';


@NgModule({
  declarations: [
    NivelListComponent,
    NivelFormComponent
  ],
  imports: [
    CommonModule,
    NivelRoutingModule
  ]
})
export class NivelModule { }
