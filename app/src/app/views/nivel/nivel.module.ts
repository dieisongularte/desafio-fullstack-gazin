import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { NivelRoutingModule } from './nivel-routing.module';
import { NivelListComponent } from './list/nivel-list.component';
import { NivelFormComponent } from './form/nivel-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NivelService } from 'src/app/services/nivel.service';


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
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [
    NivelService
  ]
})
export class NivelModule { }
