import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import { HeaderComponent } from './common/header/header.component';
import { TextInputComponent } from './input/text-input/text-input.component';
import { InputErrorComponent } from './input/input-error/input-error.component';
import { DateInputComponent } from './input/date-input/date-input.component';
import { TableFilterComponent } from './table/filter/table-filter.component';
import { EmptyTableComponent } from './table/empty-table/empty-table.component';
import { TableComponent } from './table/table/table.component';
import { LoadingComponent } from './common/loading/loading.component';
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { DropdownInputComponent } from './input/dropdown-input/dropdown-input.component';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    TextInputComponent,
    InputErrorComponent,
    DateInputComponent,
    TableFilterComponent,
    EmptyTableComponent,
    TableComponent,
    LoadingComponent,
    BreadcrumbComponent,
    DropdownInputComponent,
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
  ],
  exports: [
    SideBarComponent,
    HeaderComponent,
    TextInputComponent,
    InputErrorComponent,
    DateInputComponent,
    TableFilterComponent,
    EmptyTableComponent,
    TableComponent,
    LoadingComponent,
    BreadcrumbComponent,
  ]
})
export class ComponentsModule { }
