import { NivelService } from './../../services/nivel.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesenvolvedorRoutingModule } from './desenvolvedor-routing.module';
import { DesenvolvedorListComponent } from './list/desenvolvedor-list.component';
import { DesenvolvedorFormComponent } from './form/desenvolvedor-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesenvolvedorService } from 'src/app/services/desenvolvedor.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';


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
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    DropdownModule
  ],
  providers: [
    DesenvolvedorService,
    NivelService
  ]
})
export class DesenvolvedorModule { }
