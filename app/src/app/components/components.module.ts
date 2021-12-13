import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { HeaderComponent } from './common/header/header.component';
import { InputErrorComponent } from './input/input-error/input-error.component';
import { LoadingComponent } from './common/loading/loading.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TableModule } from 'primeng/table';
import { ListComponent } from './list/list.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    InputErrorComponent,
    LoadingComponent,
    BreadcrumbComponent,
    CardComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    KeyFilterModule,
    TableModule,
    ButtonModule
  ],
  exports: [
    SideBarComponent,
    HeaderComponent,
    InputErrorComponent,
    LoadingComponent,
    BreadcrumbComponent,
    CardComponent,
    ListComponent
  ]
})
export class ComponentsModule { }
